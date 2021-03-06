type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Pete',
  privileges: ['create-server', 'make-coffee'],
  startDate: new Date(),
};

type Combinable2 = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function addAgain(a: number, b: number): number;
function addAgain(a: string, b: string): string;
function addAgain(a: number, b: string): string;
function addAgain(a: string, b: number): string;
function addAgain(a: Combinable2, b: Combinable2) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = addAgain('Pete', 'Griffith');
result.split(' ');

const fetchedUserData = {
  id: 'u1',
  name: 'Pete',
  job: {
    title: 'CEO',
    description: 'My company',
  },
};

console.log(fetchedUserData?.job?.title);

const userInput = '';

const storedData = userInput ?? 'DEFAULT';

console.log(storedData)
/* type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name: ' + emp.name);
  if ('privileges' in emp) {
    console.log('Privileges: ' + emp.privileges);
  }
  if ('startDate' in emp) {
    console.log('Start Date: ' + emp.startDate);
  }
}

printEmployeeInformation(e1);

class Car {
  drive() {
    console.log('Driving');
  }
}

class Truck {
  drive() {
    console.log('Driving a Truck');
  }
  loadCargo(amount: number) {
    console.log('Loading Cargo: ' + amount);
  }
}

type Vehicle = Car | Truck;

const v1: Vehicle = new Car();
const v2: Vehicle = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(10);
  }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse

function moveAnimal(animal: Animal) {
    let speed: number
    switch (animal.type){
        case 'bird':
            speed = animal.flyingSpeed;
            break
        case 'horse':
            speed = animal.runningSpeed
            break
    }
    console.log("moving at: " + speed + " speed")
}

const a1: Animal = {
    type: 'bird',
    flyingSpeed: 100
}

const a2: Animal = {
    type: "horse",
    runningSpeed: 75
}

moveAnimal(a1);
moveAnimal(a2);

// const userInputElement = <HTMLInputElement>document.querySelector('#user-input');
const userInputElement = document.querySelector('#user-input');

if (userInputElement) {
    (userInputElement as HTMLInputElement).value = 'hi there'
}

interface ErrorContainer {
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    email: "not a valid email",
    username: 'not a valid username'
};

 */
