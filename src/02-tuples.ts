const prices: (number | string)[] = [1,3,2,2, 'as'];
prices.push(1);
prices.push('1');

let user: [string, number, boolean];
user = ['luisMega', 15, true];
user = ['12', 15, false];

// user = [];
// user = ['nico']

const [username, age] = user;
console.log(username);
console.log(age);


