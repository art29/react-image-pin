import { ImagePinContainer, ImagePinContainerProps } from "./ImagePinContainer";
import { Meta, StoryFn } from "@storybook/react";
// @ts-ignore
import exampleImage from "./static/example-image.png";

export default {
  children: "ImagePinContainer",
  component: ImagePinContainer,
} as Meta;

const Template: StoryFn<ImagePinContainerProps> = (args) => (
  <ImagePinContainer {...args} />
);

export const ImagePinContainerDefault = Template.bind({});
ImagePinContainerDefault.args = {
  image: exampleImage,
  pins: [
    {
      positionX: 50,
      positionY: 50,
      id: "1",
    },
  ],
};
