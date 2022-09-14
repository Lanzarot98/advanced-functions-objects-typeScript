export abstract class Animal {
  constructor(protected name: string){}

  move() {
    console.log('Moving along!')
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }

  protected doSomething() {
    console.log('dooo')
  }
}

export class Dog extends Animal {

  constructor(
    name: string,
    public owner: string
    ) {
      super(name);

  }

  woof(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log(`woof! ${this.name}`);
    }
    this.doSomething();
  }

  move(): void {
      console.log('moving as a dog');
      super.move();
  }
}

const cheis = new Dog('cheis', 'Luis');
// cheis.name = 'otro name';
cheis.woof(1)
cheis.move();

