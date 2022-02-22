//using notes router to separate api routes
const { response } = require('express');
const express = require('express');
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

//get individual note by ID... We're getting the note id from the params then filtering it through the MongoDB findById method...
//the Note model will be targeted and information will come from that in the form of 'note'... then displayed as res.json
notesRouter.get('/:id', (req, res) => {
    const noteId = req.params.id;
    Note.findById(noteId, (err, note) => {
        if (err) {
            return console.log(err)
        }
        if (!note) {
            return res.status(404).json({
                message: "Note is not found"
            })
        }
        res.json({
            reply: 'note by id success',
            note
        })
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

//delete note by ID... similar logic to retrieving the note by ID except we're using the findByIdAndRemove method from MongoDB...
//then passing that delted note with the argument 'deletedNote' and returning a success message
notesRouter.delete('/:id', (request, response) => {
    const noteId = request.params.id;
    Note.findByIdAndRemove(noteId, (err, deltedNote) => {
        if(err){
            return console.log(err);
        }
        if(!deltedNote) {
            return response.status(404).json({
                message: "That note could not be deleted becasue the ID does not exist."
            });
        }
        response.json({
            reply: "delete note by id success"
        })
    }) 
})

//update note by ID... we're going to find the note by ID but also create a variable to store the updated note(body text)...
//the varibale ID and updated body will pass throug the findOneAndUpdate method via MongoDB, along with error and updatedNote...
//which will be returned in the response.json
notesRouter.put('/:id', (request, response) => {
    const noteId = request.params.id;
    const updatedBody = request.body;
    Note.findOneAndUpdate(noteId, updatedBody, (err, updatedNote) => {
        if(err){
            console.log(err);
        }
        if(!updatedNote){
            return response.status(404).json({
                message:"Note was not found to update"
            })
        }
        response.json({
            reply: "Note has been updated successfully!",
            updatedNote
        })
    })
    
})

//exporting router object to be used in outer-most index.js as object
module.exports = {
    notesRouter
}