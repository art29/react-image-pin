import React, { useRef } from "react";
import Xarrow, { Xwrapper } from "react-xarrows";

export interface ImagePin {
  positionX: number;
  positionY: number;
  id: string;
}

export interface NewPinEvent {
  positionX: number;
  positionY: number;
}

export interface ImagePinContainerProps {
  image: string;
  imageAlt?: string;
  pins?: ImagePin[];
  customPinComponent?: React.ReactElement;
  arrow?: Omit<React.ComponentProps<typeof Xarrow>, "start" | "end">;
  onNewPin?: (event: NewPinEvent) => void;
  onExistingPin?: (event: ImagePin) => void;
}

export const ImagePinContainer: React.FC<ImagePinContainerProps> = ({
  pins = [],
  image,
  imageAlt = "Image",
  customPinComponent,
  arrow,
  onNewPin,
  onExistingPin,
}) => {
  const ref = useRef<HTMLImageElement>(null);

  const handleNewPin = (event: React.MouseEvent) => {
    if (!ref.current || !onNewPin) return;

    const { left, top } = ref.current.getBoundingClientRect();
    const positionX = ((event.clientX - left) / ref.current.clientWidth) * 100;
    const positionY = ((event.clientY - top) / ref.current.clientHeight) * 100;
    onNewPin({ positionX, positionY });
  };

  const handleExistingPinClick = (event: React.MouseEvent, pin: ImagePin) => {
    if (!onExistingPin) return;

    event.stopPropagation();
    onExistingPin(pin);
  };

  return (
    <div className="m-0 relative w-full h-full" onClick={handleNewPin}>
      <img src={image} alt={imageAlt} ref={ref} className="w-full h-full" />
      <Xwrapper>
        {pins.map((pin, i) => (
          <>
            <div
              key={pin.id}
              id={`pin-${i}`}
              className="absolute"
              onClick={(e) => handleExistingPinClick(e, pin)}
              style={{
                left: `${pin.positionX}%`,
                top: `${pin.positionY}%`,
              }}
            >
              {customPinComponent ? (
                customPinComponent
              ) : (
                <div className="w-5 h-5 bg-red-500 rounded-full"></div>
              )}
            </div>
            {arrow && i > 0 && (
              <Xarrow {...arrow} start={`pin-${i - 1}`} end={`pin-${i}`} />
            )}
          </>
        ))}
      </Xwrapper>
    </div>
  );
};
