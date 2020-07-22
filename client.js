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
        const section = document.createElement("section")
        const header = document.createElement("h4")
        const img = document.createElement("img")
        const para = document.createElement("p")
       
        img.src= e.image
        para.textContent = e.description
        header.textContent = e.name
        section.append(header)
        section.append(img)
        section.append(para)
        section.setAttribute("id", index+1)
        results.append(section)
        console.log(section)
    }) 

    
    // for (let i = 0; i < 10; i++) {
    //   document.getElementById(i).style.visibility = "hidden";
    // }
    // if (typeof data === "object") {
    //   for (index in data) {
    //     document.getElementById(index).style.visibility = "visible";
    //     document.getElementById(
    //       index
    //     ).textContent = `Name: ${data[index].name}    Image: ${data[index].image}     Description: ${data[index].description}`;
    //   }
    // } else {
    //   document.getElementById("0").style.visibility = "visible";
    //   document.getElementById("0").textContent = data;
    // }
  }
//   <section id="0">
//             <h4 id='title'>

//             </h4>
//             <img id="image" src="">
//             <p id='description'>

//             </p>
//         </section>