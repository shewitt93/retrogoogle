const data = require('./data');

const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = 3000;









app.get('/', (req, res) => res.send('Hello World!'))

app.get('/animal', (req,res)=>{ res.send(animals)})


app.get("/search", (req,res)=> {
 let search = req.query.q;
 let choice = searchTerm(search);
 choice.length > 0 ? res.send(JSON.stringify(choice.slice(0, 10))): res.send(JSON.stringify(`"${search}" returned no results!`));

});

app.get("/lucky", (req,res)=>{
    let Lucky = req.query.q;
    let choice = searchTerm(Lucky);
    choice.length > 0? res.send(JSON.stringify(choice[0]))
    : res.send(JSON.stringify(`"${ucky}" returned no results!`));

})


const searchTerm = (objectReturn) => {
    
    return data.masterArray.filter((animal)=>
    animal.name.includes(objectReturn) ||
    animal.image.includes(objectReturn) ||
    animal.description.includes(objectReturn)||
    animal.name.includes(objectReturn.toLowerCase()) ||
    animal.image.includes(objectReturn.toLowerCase()) ||
    animal.description.includes(objectReturn.toLowerCase())
  );
}




app.listen(port, () => console.log(`Express now departing from http://localhost:${port}`))