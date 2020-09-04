import { Map } from './Map';
import { Driver } from './Driver';
import { Passenger } from './Passenger';
import { MyHome } from './MyHome';

var map = new Map('map');
const driver = new Driver();
const passenger = new Passenger();
const myHome = new MyHome(passenger);
map.AddMarker(driver);
map.AddMarker(passenger);
map.AddMarker(myHome);

map.SearchText({
  input: <HTMLInputElement>document.getElementById('address')!,
  searchButton: <HTMLButtonElement>document.getElementById('searchButton')!,
});
