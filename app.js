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
const URL = `https://api.quotable.io/random`;
async function getData(URL){
    try{
        const response = await fetch (URL); 
        console.log(response); 
        const data = await response.json(); 
        console.log(data); 
        document.querySelector("h1").textContent = data.content; 
        document.querySelector("h2").textContent = data.author; 
    } catch (error){
    }
} 

getData(URL);