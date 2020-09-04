interface Mappable {
  getLocation: {
    lat: string;
    lng: string;
  };

  markerTitle(address: () => string): string;
}
