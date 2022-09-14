console.log('Math.PI', Math.PI);
console.log('Math.max', Math.max(1,2,2,8,1,0));

class MyMath {
  static readonly PI = 3.14;

  static max (...numbers: number[]) {
    console.log(numbers);
    return numbers.reduce((max, item) => max >= item ? max: item);
  }
}


// const math = new MyMath();
// math.PI;
console.log('MyMath', MyMath.PI);
console.log('MyMath', MyMath.max(-1,2,-5,4,5));

const numbers = [12,3,5,1,20,4];
console.log('MyMath', MyMath.max(...numbers));

const numbers2 = [-3,-1,-9,-2,-5];
console.log('MyMath', MyMath.max(...numbers2));

