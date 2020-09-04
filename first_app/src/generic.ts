class ArrayOfNumbers {
  constructor(private collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfString {
  constructor(private collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAny<T> {
  constructor(private collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const col = new ArrayOfAny<number>([3, 4, 6, 7]);

// funciones

function printString(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumber(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printAny<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAny<string>(['a', 'b', 'c']);
printAny<number>([2, 5, 6, 7]);

// Constraint

interface IMedia {
  print(): void;
}

class Movie implements IMedia {
  constructor(private name: string) {}

  print(): void {
    console.log(`pelicula ${this.name}`);
  }
}

class TvShow implements IMedia {
  constructor(private name: string) {}

  print(): void {
    console.log(`serie ${this.name}`);
  }
}

function printMedia<T extends IMedia>(medias: T[]) {
  medias.forEach((media) => {
    media.print();
  });
}

const movie = new Movie('goodfellas');
const tvShow = new TvShow('breaking bad');

const media: IMedia[] = [movie, tvShow];

printMedia(media);

// KeyOf

function findValue<T extends object, U extends keyof T>(object: T, key: U) {
  return object[key];
}

findValue({ name: 'rodrigo', age: 34 }, 'age');

// built-in typesscript

class Vehicle2 {
  branch: string = '';
  model: string = '';
}

function createVehicle(): Vehicle2 {
  const vehicle: Partial<Vehicle2> = {};
  vehicle.branch = 'Ford';

  return vehicle as Vehicle2;
}

let cars: Readonly<string[]> = ['ford', 'mazda'];
