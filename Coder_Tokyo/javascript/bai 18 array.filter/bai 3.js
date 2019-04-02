// Given a list of students, filter out the female ones
function filterOutFemales(members) {
    return members.filter(value => value.gender !== 'female' )
   
}
var members = [
{ name: 'Lan', gender: 'female' },
{ name: 'Linh', gender: 'female' },
{ name: 'Trung', gender: 'male' },
{ name: 'Peter', gender: 'gay' }
];

console.log(filterOutFemales(members));