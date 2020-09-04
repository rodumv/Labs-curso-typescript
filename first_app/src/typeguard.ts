class Bird {
  fly(): void {
    console.log('volando');
  }
}

class Fish {
  swim(): void {
    console.log('nadando');
  }
}

type UknownPet = Fish | Bird;

function printPet(pet: UknownPet) {
  if (pet instanceof Fish) pet.swim();
}

const pet = new Fish();
printPet(pet);
