import { Dog } from "./09-protected";

// function getValue(value: unknown ) {
//   return value;
// }

// function getValue(value: number | string ) {
//   return value;
// }

// lo que esta entre <> puedo colocar cualquier cosa
//sólo es algo con el cual identifico el tipado que se esta enviando
function getValue<T>(value: T ) {
  const array: T[ ] = [value];
  return value;
}

getValue <number>(12).toFixed();
getValue <string>('12').toLowerCase();
getValue <number[]>([1,2,3]).forEach;
const fifi = new Dog('fifi', 'Luis');
getValue<Dog>(fifi).greeting();
// Promise<boolean>
// axios.get<string[]>



