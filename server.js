const express = require('express');
const path = require('path');
const notes = require('./db/db.json');
const { title } = require('process');
// const api = require('./routes/index.js');

const PORT = process.env.port || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));


//ROUTES

//GET landing page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

//GET notes page
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
})

//GET notes
app.get('/api/notes', (req, res) => {
    console.log(req.body)
    res.status(200).json(notes);
    
    //read saved json notes
})

//POST new note
app.post('/api/notes', (req, res) =>{
    console.log('what', req.body)
    const { title, text } = req.body
    if (title && text){
        const newNote = {
            title,
            text,
        }

        const response = {
            status: 'success', 
            body: newNote
        }
        notes.push(newNote)
        res.status(201).json(response);
    } else {
        res.status(500).json('Could not post new note')
    }
    //POST new note
})


app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
  );