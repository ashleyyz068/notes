let numbs = [1,2,3,4,5]
console.log(numbs.length); 
numbs.forEach((el) => console.log(el)); // for each element print it out
// arrow functions auto return , this key word points global 
const students = [
{
    firstName: "jane",
    lastName: "ladoka",
    graduated: false,
    DOB: 2008,
    siblings: ["katie", "snake"],
    age: function(){
        return year-this.DOB; 
    },
}
]