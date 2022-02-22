//using notes router to separate api routes
const express = require('express');
const mongoose = require('mongoose');
const Note = require('../../db/models/note.model')
var notesRouter = express.Router();

//get full note list
notesRouter.get('/', (req, res) => {
    Note.find({}, (err, notes) => {
        if (err) {
            return console.error(err)
        };
        res.json({
            notes
        })
    })
})

//get individual note by ID
notesRouter.get('/:id', (req, res) => {
    res.json({
        reply: 'note by id success'
    })
})

//post a note ... sending a request to get the body text then assign to new variable and save varibale...
//that variable is then passed with arbitrary 'savedNote' passed and given a response
notesRouter.post('/', (req, res) => {
    console.log(req.body)
    const newNote = new Note(req.body)
    newNote.save().then((savedNote) => {
        res.json({
            note: savedNote,
            success: true
        })
    })

})

//delete note by ID
notesRouter.delete('/:id', (req, res) => {
    res.json({
        reply: 'note has been deleted'
    })
})

//exporting router object to be used in outer-most index.js as object
module.exports = {
    notesRouter
}