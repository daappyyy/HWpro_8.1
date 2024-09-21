// Створити ladder (сходи) – об'єкт, який дозволяє підніматися вгору та спускатися:
// let ladder = {
//   up: function () { // підніматиме вас на одну сходинку
//   },
//   down: function () { // опускатиме вас на одну сходинку
//   },
//   showStep: function () { // показує поточну сходинку
//   }
// };

let ladder = {
  step: 0,
  up: function () {
    this.step++; 
    return this;
  },
  down: function () {
    this.step--;
    return this;
  },
  showStep: function () {
    console.log(`Current step is ${this.step}`) 
  }
};

ladder.up().down().showStep();