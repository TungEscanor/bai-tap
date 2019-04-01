// Given a list of students, filter out the female ones
function filterOutFemales(members) {
    var theFamale = members.filter(value => value.gender !== 'female' )
    return theFamale;
}
var members = [
{ name: 'Lan', gender: 'female' },
{ name: 'Linh', gender: 'female' },
{ name: 'Trung', gender: 'male' },
{ name: 'Peter', gender: 'gay' }
];

console.log(filterOutFemales(members));