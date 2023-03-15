class Chronometer {
  constructor() {
    this.startTime = 0;
    this.stopTime = 0;
    this.timer = 0;
    this.intervalId = null;
  }

  start(timer) {
    if (this.startTime !== 0) {
      console.warn('Timer is already running!');
      return;
    }

    this.startTime = Date.now();
    console.info(
      `Timer is started at ${new Date(this.startTime).toLocaleTimeString()}`
    );
    this.intervalId = setInterval(() => {
      const now = Date.now();
      this.timer = now - this.startTime;
      if (this.timer >= timer) {
        this.stop();
        this.stopTime = Date.now();
        this.timer = this.stopTime - this.startTime;
        console.info(
          `Timer is stopped at ${new Date(this.stopTime).toLocaleTimeString()}`
        );
        console.log(`Elapsed time: ${this.formatTime(this.timer)}`);
      }
    }, 10);
  }

  stop() {
    if (this.startTime === 0) {
      console.error('Timer is not running :)');
      return;
    }

    clearInterval(this.intervalId);
  }

  reset() {
    clearInterval(this.intervalId);
    this.startTime = 0;
    this.stopTime = 0;
    this.timer = 0;
    console.info('Timer reset.');
  }

  formatTime(timer) {
    let minutes = Math.floor(timer / 60000);
    let seconds = Math.floor((timer % 60000) / 1000);
    let milliseconds = timer % 1000;

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    milliseconds = milliseconds < 100 ? '0' + milliseconds : milliseconds;

    return `${minutes}:${seconds}:${milliseconds}`;
  }
}

const timer = new Chronometer();
const time = 5000;

timer.start(time); // "Timer is started at 11:10:23 AM"
timer.start(); // "Timer is already running!"
setTimeout(() => {
  timer.stop(); // "Timer is stopped at 11:10:28 AM" "Elapsed time: 00:05:02"
  timer.reset(); // "Timer reset."
  timer.stop(); // "It is not running :)""
}, time);
