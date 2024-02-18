import React, { useRef } from "react";

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
  onNewPin?: (event: NewPinEvent) => void;
}

export const ImagePinContainer: React.FC<ImagePinContainerProps> = ({
  pins = [],
  image,
  imageAlt = "Image",
  customPinComponent,
  onNewPin,
}) => {
  const ref = useRef<HTMLImageElement>(null);

  const handleNewPin = (event: React.MouseEvent) => {
    if (!ref.current || !onNewPin) return;

    const { left, top } = ref.current.getBoundingClientRect();
    const positionX = ((event.clientX - left) / ref.current.clientWidth) * 100;
    const positionY = ((event.clientY - top) / ref.current.clientHeight) * 100;
    onNewPin({ positionX, positionY });
  };

  return (
    <div className="m-0 relative w-full h-full" onClick={handleNewPin}>
      <img src={image} alt={imageAlt} ref={ref} className="w-full h-full" />
      {pins.map((pin) => (
        <div
          key={pin.id}
          className="absolute"
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
      ))}
    </div>
  );
};
