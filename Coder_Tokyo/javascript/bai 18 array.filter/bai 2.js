// Given an array of numbers, return a new array that only includes the even numbers.
function evensOnly(arr) {
var evennumbers = arr.filter(function(value){
    value = value % 2 == 0;
    return value;
});
return evennumbers;
};
var me = [ 2, 4, 5, 7, 9, 1, 4]
console.log(evensOnly(me));