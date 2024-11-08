# React Image Pin

React Image Pin is a small React library made to be able to add pins to images. This can be used for maps, cards and more!

This got inspired by this library: https://github.com/galexandrade/react-image-marker.

## Installation

Install via yarn or npm

```bash
# Yarn
yarn add react-image-pin

# NPM
npm install react-image-pin
```

## Props

| Prop               | Type               | Default | Required | Description                                                                                                                                                                                                                    |
| ------------------ | ------------------ | ------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| image              | string             | -       | Yes      | The source of the image                                                                                                                                                                                                        |
| imageAlt           | string             | 'Image' | No       | The alternative text for the image                                                                                                                                                                                             |
| pins               | ImagePin[]         | `[]`    | No       | An array of pin objects. Each object should have `positionX`, `positionY`, and `id` properties, there is also a optional draggable property to make that pin draggable if the draggable property of the parent is also to true |
| customPinComponent | React.ReactElement | -       | No       | A custom component to be used as the pin                                                                                                                                                                                       |
| onNewPin           | function           | -       | No       | A function that is called when a new pin is added. It receives the new pin object as an argument                                                                                                                               |
| onExistingPin      | function           | -       | No       | A function that is called when a existing pin is clicked. It receives the existing pin object as an argument                                                                                                                   |
| draggable          | boolean            | false   | No       | A boolean that indicates if the pins should be draggable or not                                                                                                                                                                |
| onDraggedPin       | function           | -       | No       | A function that is called when a pin is dragged. It receives the pin object as an argument                                                                                                                                     |

## Usage

First, import the `ImagePinContainer` component from the library:

```typescript jsx
 { ImagePinContainer } from 'react-image-pin';
```

Then, use it in your component:

```typescript jsx
import Image from './image.png';
<ImagePinContainer
  image={Image}
  imageAlt="A beautiful image"
  draggable={true}
  pins={[
    {
      id: '1',
      positionX: 0.5,
      positionY: 0.5,
    },
    {
      id: '2',
      positionX: 0.2,
      positionY: 0.8,
    },
  ]}
  onNewPin={(pin) => console.log(pin)}
  onExistingPin={(pin) => console.log(pin)}
  onDraggedPin={(pin) => console.log(pin)}
/>
```

## Custom Pin Component

You can use a Custom Pin Component! This can be very useful if you want to do special actions on click, change the style and more!

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

AGPL-3.0 (See LICENSE.md for more information)
