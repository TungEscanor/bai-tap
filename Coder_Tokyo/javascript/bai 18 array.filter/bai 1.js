// Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
function fiveAndGreaterOnly(arr) {
    var answer = arr.filter(function(value) {
       value =  value >= 5;
        return value
    })
    return answer
}  
var me = [ 4, 5, 9, 10, 1, 3]
console.log(fiveAndGreaterOnly(me));


