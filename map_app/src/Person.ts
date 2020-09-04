export abstract class Person implements Mappable {
  protected name: string;
  protected location: {
    lat: string;
    lng: string;
  };

  get getLocation() {
    return this.location;
  }

  constructor(name: string, location: { lat: string; lng: string }) {
    this.name = name;
    this.location = {
      lat: location.lat,
      lng: location.lng,
    };
  }

  markerTitle(address: () => string): string {
    return `La dirección de ${this.name} es ${address()}`;
  }
}
