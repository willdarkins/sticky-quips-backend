const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send("hello world!!!")
})

app.get('/info', (req, res) => {
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

app.listen(port, () => {
    console.log(`🌎 sticky-quips-backend running on port http://localhost:${port}`)
})