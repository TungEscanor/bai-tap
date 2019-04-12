// Date
// moment.js
var moment = require('moment')
// var now = new Date();
// var myBirthday = new Date(1995, 11, 20); //20-12-1990

// // number of milliseconds from 1-1-1970 +7 +9
// console.log(now.getTime());
// console.log(myBirthday.getTime());

var now = moment('2019-04-12 22:04');
console.log(now.format('DD/MM/YYYY'));