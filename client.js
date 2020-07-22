// Select the google search button
const googleSearch = document.getElementById("googleSearch");

// Select the im feeling lucky button
const imFeelingLucky = document.getElementById("imFeelingLucky");

// Add event listener to google search button
googleSearch.addEventListener("submit", googleSearchFunc);

// Add event listener to im feeling lucky button
imFeelingLucky.addEventListener("submit", imFeelingLuckyFunc);

function googleSearchFunc(e) {
    e.preventDefault();
    const title = document.getElementById("title");
    const image = document.getElementById("image");
    const text = document.getElementById("description");
    // console.log("You clicked the google search button!");
    axios.get("http://localhost:3000/search/animal/:id")
    .then(function(r){
        title.innerHTML= r.data.name;
        image.setAttribute("src", r.data.image);
        text.innerHTML = r.data.description;
    })
};

function imFeelingLuckyFunc(e) {
    // console.log("You clicked the im feeling lucky button!");
    e.preventDefault();
    const title = document.getElementById("title");
    const image = document.getElementById("image");
    const text = document.getElementById("description");
    axios.get("http://localhost:3000/search/animal/:id")
    .then(function(r){
        title.innerHTML= r.data.name;
        image.setAttribute("src", r.data.image);
        text.innerHTML = r.data.description;
    })
    // .then(r => r.text())
    // .then(renderAnimal())
    .catch(console.warn)
};

// function renderAnimal(animal){
//     const newAnimal = document.createElement('p');
//     newAnimal.textContent = animal;
//     document.getElementById("content").appendChild(newAnimal)
// }