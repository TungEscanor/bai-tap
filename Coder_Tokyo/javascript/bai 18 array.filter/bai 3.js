// Given a list of students, filter out the female ones
function filterOutFemales(members) {
    var theFamale = members.filter(function(value,i) {
          //return members[i].gender !== 'female'
          value = members[i].gender !== 'female' ;
        return value;
    })
    return theFamale;
}
var members = [
{ name: 'Lan', gender: 'female' },
{ name: 'Linh', gender: 'female' },
{ name: 'Trung', gender: 'male' },
{ name: 'Peter', gender: 'gay' }
];

console.log(filterOutFemales(members));