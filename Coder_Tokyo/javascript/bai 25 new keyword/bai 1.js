/* 
  Tạo một đối tượng student có thông tin như sau:
  Tên: Herry,
  Giới tính: Nam,
  Tuổi: 18
  
  Viết hàm showInfo để in ra các thông tin của đối tượng đó.
*/

var student = {
  name: 'Herry',
  gender: 'male',
  age: 18,
}
function showInfo(){
  this.name = student.name;
  this.gender = student.gender;
  this.age = student.age;
}

showInfo(); // In ra tất cả thông tin của đối tượng