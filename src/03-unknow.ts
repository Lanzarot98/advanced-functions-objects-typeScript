let anyVar: any;
anyVar = true;
anyVar = undefined;
anyVar = null;
anyVar = 1;
anyVar = [];
anyVar = {};

let isNew: boolean = anyVar;

anyVar.doSomething();
anyVar.toUpperCase();

let unknownVar: unknown;
anyVar = true;
anyVar = undefined;
anyVar = null;
anyVar = 1;
anyVar = [];
anyVar = {};

// unknownVar.doSomething(); previene este error
if(typeof unknownVar === 'string') {
  unknownVar.toUpperCase(); // me fuerza hacer una verificación de tipos
}

if(typeof unknownVar === 'boolean') {
  let isNewV2: boolean = unknownVar;
}

const parse = (str: string): unknown => {
  return JSON.parse(str);
}
