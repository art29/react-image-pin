import React, { useRef } from "react";

export interface ImagePin {
  positionX: number;
  positionY: number;
  id: string;
}

export interface ImagePinContainerProps {
  image: string;
  imageAlt?: string;
  pins: ImagePin[];
  customPinComponent?: React.ReactElement;
}

export const ImagePinContainer: React.FC<ImagePinContainerProps> = ({
  pins,
  image,
  imageAlt = "Map",
  customPinComponent,
}) => {
  const ref = useRef(0);

  return (
    <div className="m-0 relative w-full h-full">
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
