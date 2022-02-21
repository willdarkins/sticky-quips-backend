const express = require('express');
var router = express.Router()

// notes (/notes)
router.get('/', (req, res) => {
    const notes = [
        {
            text: "Fuck a goat",
            link: "https://petco.com"
        },
        {
            text: "jerk off",
            link: "https://pornhub.com"
        },

    ]
    res.json({notes})
})

module.exports = function() {
    return router;
}