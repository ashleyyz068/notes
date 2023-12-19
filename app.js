// function greet(name){
//     const greetPromise = new Promise(function(resolve, reject){
//         resolve(`hello ${name}`);
//     });
//     return greetPromise; 
// }

// const Aaron = greet("aaron")
// console.log(Aaron);
// Aaron.then((result)=>{
//     console.log(result); 
// })

// rest api 
// learn how to access the data
// const URL = `https://api.quotable.io/random`;
// async function getData(URL){
//     try{
//         const response = await fetch (URL); 
//         console.log(response); 
//         const data = await response.json(); 
//         console.log(data); 
//         document.querySelector("h1").textContent = data.content; 
//         document.querySelector("h2").textContent = data.author; 
//     } catch (error){
//     }
// } 

// getData(URL);

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

const dennis = {
    name: "dennis",
    age: 5,
    color: "blue",
};

function age (d){
    return d.age
};

console.log(age(dennis));

console.log(Array.from(dennis.name)); 
x = [1,2,3,4]; 
y=[1,2,3,4,5];
z=[...x,...y];
console.log(z)

if (dennis.name.includes("den")){
    console.log("true"); 
} else {
    console.log("false")
}

sum = 0;
const data = [1,2,3,4,5]
for (i=0; i<data.length; i++){
    sum+=data[i]
}
console.log(sum)

// while (){

// }