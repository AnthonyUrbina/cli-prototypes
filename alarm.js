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

function alarm() {
  const time = process.argv[2];
  console.log(time);
  const now = new Date();
  const utc = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
  console.log(utc);
}

alarm();
