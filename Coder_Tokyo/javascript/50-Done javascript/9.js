function omitCharAt(str, n) {
	//Viết function omitCharAt  trả về chuỗi đã được loại bỏ ký tại vị trí n bất kỳ
  //Lưu ý cho chuối 'abcd' :
  // 		element    'a'|'b'|'c'|'d'
  //		index 	    0	|	1	|	2	|	3
  //  n = 4 thì chuỗi trả về là 'acd'
  //  n = 1 ------------------- 'acd'
  //  n = 2 ------------------- 'abd'
  var answer = str.splice(n,1,);
  return answer
}

omitCharAt('abcd', 2)