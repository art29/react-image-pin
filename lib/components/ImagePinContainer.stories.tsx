import { ImagePinContainer } from "./ImagePinContainer";
import { StoryObj } from "@storybook/react";
// @ts-expect-error image is not a module
import exampleImage from "./static/example-image.png";
import { useState } from "react";

export default { component: ImagePinContainer };
type Story = StoryObj<typeof ImagePinContainer>;

export const ImagePinContainerDefault: Story = {
  args: {
    image: exampleImage,
  },

  render: function Render(args) {
    const [pins, setPins] = useState([
      {
        positionX: 50,
        positionY: 50,
        id: "1",
      },
    ]);

    return (
      <ImagePinContainer
        {...args}
        pins={pins}
        onNewPin={(pin) =>
          setPins([...pins, { ...pin, id: String(pins.length) }])
        }
      />
    );
  },
};
