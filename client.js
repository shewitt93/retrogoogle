// const { url } = require("inspector");

const form = document.getElementById("form");
const search = document.getElementById("search");
const lucky = document.getElementById("lucky");

function displayData() {
  const data = localStorage.getItem('data')
  // console.log(JSON.parse(data))
  const parseData = JSON.parse(data)
  
   
  // section.id= "hidden"
  const results = document.querySelector(".results")  
  
  // container.id= "visible"  
      parseData.map((e, index)=>{
          console.log(e)
         
          const atag = document.createElement("a")
          
          
          
          
          
          results.append(atag)
          
          atag.setAttribute("id", index+1)
          atag.setAttribute("class", "textOverImage item-b")
          atag.setAttribute("data-title", e.name)
          atag.setAttribute("data-text", e.description)
          atag.setAttribute("style", `background-image:url(${e.image})`)
      })}

function titleCase(str) {
    return str
      .toLowerCase()
      .split(" ")
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  }


  function openLucky(animal) {
    let animalName = animal.name;
    animalName === undefined
      ? console.log("No results to open!")
      : window.open(`https://en.wikipedia.org/wiki/${animalName}`);
  }



search.addEventListener("click", (e) => {
    e.preventDefault();
    question = form.input.value; //BUG: breaks when '&' is included in search
    question = titleCase(question);
    fetch(`http://localhost:3000/search?q=${question}`)
      .then((r) => r.json())
      .then((data) => setData(data))
      .catch((err) => console.warn(err));
  });
lucky.addEventListener("click", (event) => {
    event.preventDefault();
    question = form.input.value;
    question = titleCase(question);
    fetch(`http://localhost:3000/lucky?q=${question}`)
      .then((r) => r.json())
      .then(openLucky)
      .catch((err) => console.warn("Server Connection Issue"));
  });


// function displayData(data) {
// localStorage.setItem('data', JSON.stringify(data))

// const section = document.querySelector(".section")   
// // section.id= "hidden"
// const results = document.querySelector(".results")  
// const container = document.querySelector(".container")
// // container.id= "visible"  
//     data.map((e, index)=>{
//         console.log(e)
       
//         const atag = document.createElement("a")
        
        
        
        
        
//         results.append(atag)
        
//         atag.setAttribute("id", index+1)
//         atag.setAttribute("class", "textOverImage item-b")
//         atag.setAttribute("data-title", e.name)
//         atag.setAttribute("data-text", e.description)
//         atag.setAttribute("style", `background-image:url(${e.image})`)
       
        

       
//     })}
 
function setData(data) {
  localStorage.setItem('data', JSON.stringify(data))
  location.pathname = '/displaypage.html'
  



}

         
            