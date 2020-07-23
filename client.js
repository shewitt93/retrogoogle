// const { url } = require("inspector");

const form = document.getElementById("form");
const search = document.getElementById("search");
const lucky = document.getElementById("lucky");

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
      .then((data) => displayData(data))
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


function displayData(data) {
const section = document.querySelector(".section")   
section.id= "hidden"
const results = document.querySelector(".results")  
results.id= "visible"  
    data.map((e, index)=>{
        console.log(e)
        // const para = document.createElement("p")
        // const header = document.createElement("h4")
        // const img = document.createElement("img")
        const atag = document.createElement("a")
        
        
        
        
        // const img = atag.setAttribute("style", "img")
        // const header = atag.setAttribute("data-title", "header")
        // const para= atag.setAttribute("data-text", "para" )
        results.append(atag)
        // img.src = e.image
        // para.textContent = e.description
        // header.textContent = e.name
        // atag.classList.add("results")
        // atag.append(header)
        // atag.append(img)
        // atag.append(para)
        atag.setAttribute("id", index+1)
        atag.setAttribute("class", "textOverImage item-b")
        atag.setAttribute("data-title", e.name)
        atag.setAttribute("data-text", e.description)
        atag.setAttribute("style", `background-image:url(${e.image})`)
        // img..setAttribute("style", "background-image")
        

        // document.querySelector().setAttribute()img.style.backgroundImage(img.src);
        // header.style.dataTitle(header);
        // para.style.dataText(para);
        // console.log(atag)
    })}
 

    // //const section = document.createElement("section")
    // const header = document.createElement("h4")
    // const img = document.createElement("img")
    // const para = document.createElement("p")
    // img.src= e.image
    // para.textContent = e.description
    // header.textContent = e.name
    // section.append(header)
    // section.append(img)
    // section.append(para)
    // section.setAttribute("id", index+1)
    // results.append(section)
    // console.log(section)
    // <!-- <main class="item-b">
    //     <a  class="textOverImage item-b" style="background-image:url(https://i.pinimg.com/originals/45/35/93/45359365063a84ec79dd0430a6c7e7b7.jpg)" data-title="DANIEL OCEAN" data-text="Danny is a risk taker, being no stranger to a life of high stakes crime. Even though he has a lot of blind sides [1], he constantly sees opportunities for cons, having to resist the urge to commit to them. He is loyal and very protective of those close to him. He speaks convincingly [1], lightly, assertively, and confidently, even when under pressure to perform. Nagel describes him as having style and brio. For all of his pulled jobs, Danny has a great deal of foresight to overcome any changes affecting his plans and to be one step ahead of his targets.
    //     ">
    //   </a> -->
      

    
    