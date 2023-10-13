// let numbs = [1,2,3,4,5]
// console.log(numbs.length); 
// numbs.forEach((el) => console.log(el)); // for each element print it out
// // arrow functions auto return , this key word points global 
// const students = [
// {
//     firstName: "jane",
//     lastName: "ladoka",
//     graduated: false,
//     DOB: 2008,
//     siblings: ["katie", "snake"],
//     age: function(){
//         return year-this.DOB; 
//     },
// }
// ]
const DOMSelectors ={
    form: document.querySelector("#form"), 
    firstName:document.querySelector(".first-name"), 
    h2s: document.querySelectorAll("h2"),
}; 
DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault(); 
    console.log(DOMSelectors.firstName.value); 
    DOMSelectors.h2s.forEach((el)=> el.textContent = DOMSelectors.firstName.value
    );

})
console.log(DOMSelectors.firstName)