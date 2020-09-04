interface User {
  name: string;
  startDate: Date;
}

interface Admin {
  name: string;
  permission: string[];
}

interface UserAdmin extends User, Admin {}

const doctor: UserAdmin = {
  name: 'Rodrigo',
  startDate: new Date(),
  permission: ['Ver Chart de paciente'],
};
