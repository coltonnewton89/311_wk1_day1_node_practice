// import moment here; use this package in each function
const moment = require('moment')
// using moment to find current day
const today = () => {
  return moment().format('dddd');

}

const calendar = () => {
  return moment().format('MMM DD, YYYY');
}

const currentTime = () => {
  return moment().format('hh:mm:ss A');
}

module.exports = {
  today,
  calendar,
  currentTime
}