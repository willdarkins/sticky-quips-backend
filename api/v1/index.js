//using notes router to separate api routes
const express = require('express');
var notesRouter = express.Router();

notesRouter.get('/', (req, res) => {
    const notes = [
        {
            text: "Get cat food",
            link: "https://petco.com"
        },
        {
            text: "Eat lunch",
            link: "https://panera.com"
        },

    ]
    res.json({notes})
})

//exporting router object to be used in outer-most index.js as object
module.exports = {
    notesRouter
}