/* 
  Dùng hàm powerup tính bình phương các số chia hết cho 2 trong mảng truyền vào
*/

function powerup(arr) {
    var number = arr.filter((a => a %2 === 0),[]);
    return number.map(a => a * a)
}
console.log(powerup([0, 3, 6, 7, 4])); // [0, 3, 36, 7, 16] 