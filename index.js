const express = require('express');
const cors = require('cors')
const app = express();
const port = 5000;
const { notesRouter } = require('./api/v1/index')

app.use(cors());

app.get('/', (req, res) => {
    res.send("hello world!!!")
})

//improting notes api from the api folder
app.use('/notes' , notesRouter);

app.listen(port, () => {
    console.log(`🌎 sticky-quips-backend running on port http://localhost:${port}`)
})