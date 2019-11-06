// import moment here; use this package in each function
const moment = require('moment')
// using moment to find current day
const today = () => {
  var today = new Date();
  console.log(today);

}

const calendar = () => {
  let jack = Date.calendar();
  console.log(jack);
}

const currentTime = () => {
  let cTime = Dates.currentTime();
  console.log(cTime);
}

module.exports = {
  today,
  calendar,
  currentTime
}