const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const port = 3000;

const animals = [
    {name: "Sloth", image: "https://images.unsplash.com/photo-1576612026118-888273d58653?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80", description: "Sloths are a group of arboreal Neotropical xenathran mammals, constituting the suborder Folivora. Noted for slowness of movement, they spend most of their lives hanging upside down in the trees of the tropical rain forests of South America and Central America."},
    {name: "Snow Leopard", image: "https://images.unsplash.com/photo-1526289636136-bce3fd37f962?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80", description: "The snow leopard, also known as the ounce, is a large cat native to the mountain ranges of Central and South Asia. It is listed as Vulnerable on the IUCN Red List because the global population is estimated to number less than 10,000 mature individuals and is expected to decline about 10% by 2040."},
    {name: "Giant Panda", image: "https://images.unsplash.com/photo-1591630866811-eceedf667541?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80", description: "The giant panda, also known as the panda bear or simply the panda, is a bear native to south central China. It is characterised by large, black patches around its eyes, over the ears, and across its round body. The name 'giant panda' is sometimes used to distinguish it from the red panda, a neighboring musteloid."},
    {name: "African Elephant", image: "https://images.unsplash.com/photo-1554490754-c1f912ac1b77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80", description: "The African elephant is a genus comprising two living elephant species, the African bush elephant and the smaller African forest elephant. Both are herbivores and live in groups. They have grey skin and differ in the size of their ears and tusks, and in the shape and size of their skulls."},
    {name: "Bald Eagle", image: "https://images.unsplash.com/photo-1506439943497-c78af0956592?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80", description: "The bald eagle is a bird of prey found in North America. A sea eagle, it has two known subspecies and forms a species pair with the white-tailed eagle. Its range includes most of Canada and Alaska, all of the contiguous United States, and northern Mexico."},
    {name: "Emerald Tree Boa", image: "https://images.unsplash.com/photo-1474314170901-f351b68f544f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80", description: "Corallus caninus, commonly called the emerald tree boa, is a non-venomous boa species found in the rainforests of South America. Since 2009 the species Corallus batesii has been distinguished from C. caninus."},
    {name: "Komodo Dragon", image: "https://images.unsplash.com/photo-1580844946486-f08607088f08?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80", description: "The Komodo dragon, also known as the Komodo monitor, is a species of lizard found in the Indonesian islands of Komodo, Rinca, Flores, and Gili Motang."},
    {name: "Whale Shark", image: "https://images.unsplash.com/photo-1464926322190-70f42beb8250?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80", description: "The whale shark is a slow-moving, filter-feeding carpet shark and the largest known extant fish species. The largest confirmed individual had a length of 18.8 m. The whale shark holds many records for size in the animal kingdom, most notably being by far the largest living nonmammalian vertebrate."},
    {name: "Cheetah", image: "https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1089&q=80", description: "The cheetah is a large cat native to Africa and central Iran. It is the fastest land animal, capable of running at 80 to 128 km/h, and as such has several adaptations for speed, including a light build, long thin legs and a long tail."},
    {name: "Siberian Tiger", image: "https://images.unsplash.com/photo-1524132989408-c8ee48d8f147?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80", description: "The Siberian tiger is a population of Panthera tigris tigris native to the Russian Far East and Northeast China, and possibly North Korea. It once ranged throughout the Korean Peninsula, north China, Russian Far East, and eastern Mongolia."}
];

let number;

function getRandomAnimalNo(){
    number = Math.floor(Math.random()*10);
    return number;
}

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/search/animal/:id', function(req, res){ //
    // generate random number that equates to animal
    getRandomAnimalNo(); //

    // send the random animal
    let animal = animals[number];
    if(!animal) {
        res.send("Error: Please pick a number between 0 and 9"); //
    } else {
        res.send(animal);
    };
});

app.get('/search/animal', (req,res)=> res.send(animals))

app.listen(port, () => console.log(`Express now departing from http://localhost:${port}`))
