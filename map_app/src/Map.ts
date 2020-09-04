import { Person } from './Person';
import { MapGeoCoder } from './MapGeoCoder';
export class Map {
  private googleMap: google.maps.Map;
  private geoCoder: MapGeoCoder;
  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId)!, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });

    this.geoCoder = new MapGeoCoder(this.googleMap);
  }

  AddMarker(mappable: Mappable) {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: parseInt(mappable.getLocation.lat),
        lng: parseInt(mappable.getLocation.lng),
      },
    });

    this.geoCoder.AddMarkerInfo(marker, mappable);
  }

  SearchText(options: SearchOptions): void {
    this.geoCoder.SearchText(options);
  }
}
