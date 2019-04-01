// Count the occurrences of each element inside an array using reduce
function countOccurrences(arr) {
    var answer = arr.reduce(function (a, b) { 
        if (b in a) {
          a[b]++;
        }
        else {
          a[b] = 1;
        }
        return a;
}, {})
        return answer
};


console.log(countOccurrences(['a', 'b', 'c', 'b', 'a']));
// { 
//   a: 2, 
//   b: 2, 
//   c: 1 
// }