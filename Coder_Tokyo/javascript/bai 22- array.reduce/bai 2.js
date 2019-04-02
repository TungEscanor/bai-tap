// Count the occurrences of each element inside an array using reduce
function countOccurrences(arr) {
  return arr.reduce(function (a, b) { 
        if (b in a) {
          a[b]++;
        }
        else {
          a[b] = 1;
        }
        return a;
}, {})
};


console.log(countOccurrences(['a', 'b', 'c', 'b', 'a']));
// { 
//   a: 2, 
//   b: 2, 
//   c: 1 
// }