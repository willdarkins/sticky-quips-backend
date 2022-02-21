//using notes router to separate api routes
const express = require('express');
const mongoose = require('mongoose');
const Note = require('../../db/models/note.model')
var notesRouter = express.Router();

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

//exporting router object to be used in outer-most index.js as object
module.exports = {
    notesRouter
}