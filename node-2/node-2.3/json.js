const { Timer, Time, TimerOptions } = require('./module.cjs');

const timer = new Timer({
  label: 'test-timer',
  startTimestamp: 1563074001233
});

console.log(timer.isStarted());
console.log(timer.time());