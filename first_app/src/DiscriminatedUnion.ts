interface Square {
  type: 'square';
  size: number;
}

interface Rectangle {
  type: 'rectangle';
  height: number;
}

interface Circle {
  type: 'circle';
  radius: number;
}

type Shape = Square | Rectangle | Circle;

function print(shape: Shape) {
  switch (shape.type) {
    case 'square':
      shape.size;
      break;
    case 'rectangle':
      shape.height;
      break;
    case 'circle':
      shape.radius;
      break;
  }
}
