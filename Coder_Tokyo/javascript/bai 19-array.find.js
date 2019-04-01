// Viết hàm trả về số chẵn đầu tiên trong mảng sử dụng find method
// Nếu không tìm thấy số chẵn nào thì trả về undefined
function findFirstEvenNumber(array) {
    var even = array.find(value => value %2 === 0)
    return even;
};
me = [ 3, 5, 6, 7, 9]
console.log(findFirstEvenNumber(me));