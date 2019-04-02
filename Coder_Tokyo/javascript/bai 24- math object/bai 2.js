/* 
  Dùng hàm average tính điểm trung bình 3 môn của một học sinh.
  Làm tròn điểm trung bình
*/

function average(arr) {
  var sum = arr.reduce((a, b) => a + b);
  return Math.round(sum / 3)
}

console.log(average([8, 8 , 6.75])) // 8