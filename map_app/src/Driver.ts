import { Person } from './Person';
import faker from 'faker';
export class Driver extends Person {
  constructor() {
    super(faker.name.firstName(), {
      lat: faker.address.latitude(),
      lng: faker.address.longitude(),
    });
  }
}
