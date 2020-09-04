/*class Family {
  constructor(
    public readonly name: string,
    public readonly castles: string[]
  ) {}
}

const lannister = new Family('Lannister', ['Winterfell', 'Casterly Rock']);
const targaryen = new Family('Targaryen', ['Dragonstone ', 'Summerhall']);

const families: Family[] = [lannister, targaryen];

interface CastleCallback {
  (err?: Error, castles?: string[]): void;
}

function getCastlesByFamily(family: string, callback: CastleCallback): void {
  setTimeout(
    () => {
      try {
        let foundCastles = families.filter((x) => x.name == family);

        if (foundCastles.length > 0) {
          callback(undefined, foundCastles.map((x) => x.castles)[0]);
        } else {
          throw new Error('No se encontraron castillos');
        }
      } catch (error) {
        callback(error, undefined);
      }
    },

    2000
  );
}

function logCastleSearch(err?: Error, castles?: string[]): void {
  if (err) {
    console.log(`Mensaje de error: ${err.message}`);
  } else {
    console.log('Se encontraron los siguientes castillos:');
    console.log(castles);
  }
}

console.log('Comenzando la busqueda...');
getCastlesByFamily('Stark', logCastleSearch);
console.log('Busqueda terminada...');
*/
