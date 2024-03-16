import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import Draggable, { DraggableEvent } from "react-draggable";
import Xarrow, { useXarrow, Xwrapper } from "react-xarrows";

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
  customPinComponent?: (pin: ImagePin) => React.ReactElement;
  arrow?: Omit<React.ComponentProps<typeof Xarrow>, "start" | "end">;
  onNewPin?: (event: NewPinEvent) => void;
  onExistingPin?: (event: ImagePin) => void;
  draggable?: boolean;
  onDraggedPin?: (pin: ImagePin) => void;
}

export interface ImagePinContainerRef {
  rerender: () => void;
}

export const ImagePinContainer = forwardRef<
  ImagePinContainerRef,
  ImagePinContainerProps
>(
  (
    {
      pins = [],
      image,
      imageAlt = "Image",
      customPinComponent,
      arrow,
      onNewPin,
      onExistingPin,
      draggable = false,
      onDraggedPin,
    },
    forwardedRef,
  ) => {
    const ref = useRef<HTMLImageElement>(null);
    const [mounted, setMounted] = useState(false);
    const [dragging, setDragging] = useState(false);
    const updateArrows = useXarrow();

    useImperativeHandle(
      forwardedRef,
      () => {
        return {
          rerender: () => {
            setMounted(false);
          },
        };
      },
      [],
    );

    const handleDrag = (e: DraggableEvent, pin: ImagePin) => {
      if (dragging) {
        const { positionX, positionY, error } = handleMouseEvent(
          e as React.MouseEvent,
        );

        if (!error && !!onDraggedPin) {
          const newPin = { ...pin, positionX, positionY };
          onDraggedPin(newPin);
        }

        updateArrows();
        setTimeout(function () {
          setDragging(false);
        }, 150);
      }
    };

    const handleMouseEvent = (
      event: React.MouseEvent,
    ): { error: boolean; positionX: number; positionY: number } => {
      if (!ref.current || !onNewPin) {
        return { error: true, positionX: 0, positionY: 0 };
      }

      const { left, top } = ref.current.getBoundingClientRect();
      const positionX =
        ((event.clientX - left) / ref.current.clientWidth) * 100;
      const positionY =
        ((event.clientY - top) / ref.current.clientHeight) * 100;
      return { error: false, positionX: positionX, positionY: positionY };
    };

    const handleNewPin = (event: React.MouseEvent) => {
      if (!dragging) {
        const { positionX, positionY, error } = handleMouseEvent(event);
        if (!error && onNewPin) {
          onNewPin({ positionX, positionY });
          updateArrows();
        }
      }
    };

    const handleExistingPinClick = (event: React.MouseEvent, pin: ImagePin) => {
      if (!onExistingPin || dragging) return;

      event.stopPropagation();
      onExistingPin(pin);
    };

    useEffect(() => {
      if (!ref.current) return;
      const resizeObserver = new ResizeObserver(() => {
        if (
          ref.current &&
          ref.current.clientHeight > 0 &&
          ref.current.clientWidth > 0
        ) {
          setMounted(true);
        }
      });
      resizeObserver.observe(ref.current);
      return () => resizeObserver.disconnect();
    }, [mounted]);

    return (
      <div className="m-0 relative w-full h-full" onClick={handleNewPin}>
        <img src={image} alt={imageAlt} ref={ref} className="w-full h-full" />
        <Xwrapper>
          {mounted &&
            pins.map((pin, i) => (
              <>
                {draggable ? (
                  <Draggable
                    bounds="parent"
                    onDrag={() => setDragging(true)}
                    onStop={(e) => handleDrag(e, pin)}
                  >
                    <div
                      id={`pin-${i}`}
                      className="absolute"
                      onClick={(e) => handleExistingPinClick(e, pin)}
                      style={{
                        left: `${pin.positionX}%`,
                        top: `${pin.positionY}%`,
                      }}
                    >
                      {customPinComponent ? (
                        customPinComponent(pin)
                      ) : (
                        <div className="w-5 h-5 bg-red-500 rounded-full"></div>
                      )}
                    </div>
                  </Draggable>
                ) : (
                  <div
                    id={`pin-${i}`}
                    className="absolute"
                    onClick={(e) => handleExistingPinClick(e, pin)}
                    style={{
                      left: `${pin.positionX}%`,
                      top: `${pin.positionY}%`,
                    }}
                  >
                    {customPinComponent ? (
                      customPinComponent(pin)
                    ) : (
                      <div className="w-5 h-5 bg-red-500 rounded-full"></div>
                    )}
                  </div>
                )}
                {arrow && i > 0 && (
                  <Xarrow {...arrow} start={`pin-${i - 1}`} end={`pin-${i}`} />
                )}
              </>
            ))}
        </Xwrapper>
      </div>
    );
  },
);
