interface Billable {
  currentBill(): string;
}

interface Flyable {
  altitude(): string;
}

abstract class Vehicle {
  constructor(protected readonly brandName: string, private price: number) {}

  get getPrice() {
    return `El precio actual es ${this.price}`;
  }

  set setPrice(value: number) {
    this.price = value;
  }

  static PriceToCurrency(value: number, typeOfCurrency: string) {
    let result = '';
    switch (typeOfCurrency) {
      case 'USD':
        result = 'US ' + value;
        break;
      case 'PESO':
        result = '$ ' + value;
        break;
    }

    return result;
  }

  abstract drive(): void;
}

class Car extends Vehicle implements Billable {
  drive(): void {
    console.log(`Estoy conduciendo un auto ${this.brandName}`);
  }
  currentBill(): string {
    return 'La factura actual es de 200';
  }
}

class Airplane extends Vehicle implements Billable, Flyable {
  drive(): void {
    console.log(`Estoy conduciendo un auto ${this.brandName}`);
  }

  currentBill(): string {
    return 'La factura actual es de 200';
  }

  altitude(): string {
    return '50.000 pies';
  }
}

const vehicle: Flyable = new Airplane('mazda', 200);
// vehicle.drive();
