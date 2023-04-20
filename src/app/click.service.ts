export class ClickService {
  counter = 0;

  logActiveToInactive() {
    this.counter ++;
    console.log('Switch active to inactive' + this.counter);
  }
  logInactiveToActive() {
    this.counter ++;
    console.log('Switch inactive to active' + this.counter);
  }
}
