const express = require('express');
const path = require('path');
// const api = require('./routes/index.js');

const PORT = process.env.port || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));


//ROUTES

//GET landing page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

//GET notes page
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'notes.html'))
})

//GET notes
app.get('/api/notes', (req, res) => {
    //read saved json notes
})

//POST new note
app.post('api/notes', (req, res) =>{
    //POST new note
})

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
  );