// Repasando Poo
const myName = `dibot55`;
myName.toLowerCase();

const suma = (a: number, b: number) => {
  return a + b;
};
suma(1, 3);

class Persona {
  constructor(public name: string, public age: number) {}

  getSummary(a: number, b: number) {
    return a + b;
  }

  getData() {
    return `My name is ${this.name} and im ${this.age}`;
  }
}
const person = new Persona('dibot55', 25);
console.log(person.getData());
console.log(person.getSummary(20, 30));
