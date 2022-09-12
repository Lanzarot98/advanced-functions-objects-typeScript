// Luis => [L,u,i,s] => string => string[]
// [L,u,i,s] => Luis => string[] => string

function parseStr(input: string | string[]): string | string[] {
    if(Array.isArray(input)) {
      return input.join(''); //retorno string
    } else {
      return input.split(''); // retorno string[]
    }
}

const rtaArray = parseStr('Luis');
// tengo que hacer una confirmación para que typeScript sepa que es un array
if (Array.isArray(rtaArray)) {
  rtaArray.reverse();
}
console.log('rtaArray, Luis =>', rtaArray);

const rtaStr = parseStr(['L','u','i','s']);
if (typeof rtaStr === 'string') {
  rtaStr.toLowerCase();
}
console.log("rtaStr, ['L','u','i','s'] =>", rtaStr);
