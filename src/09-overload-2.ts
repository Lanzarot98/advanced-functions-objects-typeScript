// Luis => [L,u,i,s] => string => string[]
// [L,u,i,s] => Luis => string[] => string

//estamos tipando la función
export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
export function parseStr(input: number): boolean;


// export function parseStr(input: string | string[]): string | string[] {
//   if(Array.isArray(input)) {
//     return input.join(''); //retorno string
//   } else {
//     return input.split(''); // retorno string[]
//   }
// }

export function parseStr(input: unknown): unknown {
  if(Array.isArray(input)) {
    return input.join(''); //retorno string
  } else if(typeof input === 'string'){
    return input.split(''); // retorno string[]
  } else if(typeof input === 'number') {
    return true; // boolean
  }
}

const rtaArray = parseStr('Luis');
rtaArray.reverse();
// if (Array.isArray(rtaArray)) {
// rtaArray.reverse();
// }
console.log('rtaArray, Luis =>', rtaArray);

const rtaStr = parseStr(['L','u','i','s']);
rtaStr.toLowerCase();
// if (typeof rtaStr === 'string') {
// rtaStr.toLowerCase();
// }
console.log("rtaStr, ['L','u','i','s'] =>", rtaStr);

const rtaBoolean = parseStr(12);
console.log('rtaBoolean, 12 =>', rtaBoolean);
