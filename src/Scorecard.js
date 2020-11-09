class Scorecard {
  constructor() {
    this.scorecard;
    this.rolls = [];
  }

  roll(pins) {
    if (pins >= 0) {
      this.rolls.push(pins);
    } else return "pins number must be equal or greater than 0";
  }

  score() {
    let result = 0;
    let rollnumber = 0;
    console.log(this.rolls);
    console.log("----------");
    for (let framenumber = 0; framenumber < 10; framenumber++) {
      if (this.rolls[rollnumber] + this.rolls[rollnumber + 1] === 10) {
        result +=
          this.rolls[rollnumber] +
          this.rolls[rollnumber + 1] +
          this.rolls[rollnumber + 2];
        rollnumber += 2;
      } else if (this.rolls[rollnumber] === 10) {
        result +=
          this.rolls[rollnumber] +
          this.rolls[rollnumber + 1] +
          this.rolls[rollnumber + 2];
        rollnumber++;
      } else {
        result += this.rolls[rollnumber] + this.rolls[rollnumber + 1];
        rollnumber += 2;
      }
    }
    return result;
  }
}
