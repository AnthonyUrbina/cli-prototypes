/* eslint-disable no-console */
/*
client will enter node alarm.js <time>
create a function, take time as a param
get current time
get param time
find difference
setTimeout, difference as delay
callback is
*/

const { exec } = require('child_process');

function alarm(time) {
  const alarmTime = new Date(time);
  const timeUntilAlarm = alarmTime.getTime() - Date.now();
  setTimeout(() => {
    exec('afplay Glass.wav', (error, stdout, stderr) => {
      if (error) {
        console.error(error);
      }
    });
    console.log('WAKE UP');
  }, timeUntilAlarm);
}
const alarmTime = process.argv[2];

alarm(alarmTime);
