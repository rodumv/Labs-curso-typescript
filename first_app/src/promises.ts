/*class Family {
  constructor(
    public readonly name: string,
    public readonly castles: string[]
  ) {}
}

const lannister = new Family('Lannister', ['Winterfell', 'Casterly Rock']);
const targaryen = new Family('Targaryen', ['Dragonstone ', 'Summerhall']);

const families: Family[] = [lannister, targaryen];

function getCastlesByFamily(family: string): Promise<string[]> {
  let p: Promise<string[]> = new Promise((resolve, reject) => {
    setTimeout(
      () => {
        let foundCastles = families.filter((x) => x.name == family);

        if (foundCastles.length > 0) {
          resolve(foundCastles.map((x) => x.castles)[0]);
        } else {
          reject('No se encontraron castillos');
        }
      },

      2000
    );
  });
  return p;
}

console.log('Comenzando la busqueda...');
getCastlesByFamily('Lannister')
  .then(
    (castles) => {
      console.log(`Castillos encontrados: ${castles.join(', ')}`);
      throw 'error!!!!';
      return castles.length;
    },
    (reason) => {
      return 0;
    }
  )
  .then((numberCastles) =>
    console.log(`# Castillos encontrados: ${numberCastles}`)
  )
  .catch((reason) => console.log(`Error: ${reason}`));
console.log('Busqueda terminada...');
*/
