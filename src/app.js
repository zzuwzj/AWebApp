export class Welcome {
  constructor() {
    this.name = 'Welcom to A Web App!';
  }

  get message() {
    return `${this.name}`;
  }

  sayHello() {
    alert(`Hello, ${this.message}`);
  }
}
