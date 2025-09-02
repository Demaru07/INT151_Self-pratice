const studentScoces = [
{ name: 'Alice' ,score: 85 },
{ name: 'Bob',score: 92 } ,
{ name: 'Charlie',score: 68 } ,
{ name: 'David',score: 55 } ,
{ name: 'Eve', score: 78 } ,
];
 
 
function getPassingNames(studentScoces){
    pass_student = []
    studentScoces.filter(value => value.score >= 70).forEach(element => {
        pass_student.push(element.name.toUpperCase())
    });
    return pass_student
}
const passingNames = getPassingNames(studentScoces);
console.log(passingNames);
// Output should be: ["ALICE", "BOB, "EVE"]

//check array type
console.log(Array.isArray([]))
console.log(Array.isArray([1, true]))
console.log(Array.isArray("[]"))
//merge string
const array1 = ["a", "b", "c"]
const array2 = ["d", "e", "f"]
const array3 = array1.concat(array2)
console.log(array3)
//convert to string
console.log(array3.toString())

const nums = [13, 5, 7]
nums.reverse

const arr14 = [1, 30, 4, 21, 10000]
arr14.sort((a,b) => a-b)
console.log(`arr14: ${arr14}`);

const stds = [
  { id: 1, name: "Tisanai", email: "tisanai@sit.kmutt.ac.th" },
  { id: 5, name: "Pornchai", email: "pornchai@sit.kmutt.ac.th" },
  { id: 2, name: "Suda", email: "suda@sit.kmutt.ac.th" },
]

const newstds = stds.sort((a,b) => 
    a.name.localeCompare(b.name)
);
console.log(newstds);

//commonJS
function echo(value) {
    return value
}

const getLength = (str) => str.length
const MAXSTUDENT = 60

//default export
module.exports = { echo, getLength, MAXSTUDENT } //{echo:echo}