interface ApiEndpoint {
  get(): string[];
  post(request: { token: string; body: string }): void;
}

let httpServer: { [key: string]: ApiEndpoint } = {};

@registerEndpoint
class Families implements ApiEndpoint {
  private houses = ['Lannister', 'Targaryen'];

  get() {
    return this.houses;
  }
  @protect('1234')
  post(request: { token: string; body: string }) {
    this.houses.push(request.body);
  }
}

@registerEndpoint
class Castles implements ApiEndpoint {
  private castles = ['Winterfell', 'Casterly Rock'];

  get() {
    return this.castles;
  }

  getCastles(
    @paramDecorator index: number,
    @paramDecorator defaultValue: string
  ): string {
    return this.castles[index] ?? defaultValue;
  }

  @protect('123')
  post(request: { token: string; body: string }) {
    this.castles.push(request.body);
  }
}

function protect(token: string) {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const method = descriptor.value;

    descriptor.value = function (request: { token: string; body: string }) {
      if (request.token != token) {
        console.log('403 forbiden!!');
      } else {
        const bindingOriginalFunction = method.bind(this);
        const result = bindingOriginalFunction(request);

        return result;
      }
    };
  };
}

function paramDecorator(target: any, key: string, index: number) {
  console.log(target);
  console.log(key);
  console.log(index);
}

function registerEndpoint(target: any) {
  const className = target.name;
  const endpointPath = '/' + className.toLowerCase();
  httpServer[endpointPath] = new target();
}

//registerEndpoint(Families);
//registerEndpoint(Castles);

//console.log(httpServer);

//console.log(httpServer['/castles'].get());
httpServer['/castles'].post({ token: '123', body: 'Castle Black' });
console.log(httpServer['/castles'].get());
httpServer['/families'].post({ token: '1234', body: 'Stark' });
console.log(httpServer['/families'].get());
