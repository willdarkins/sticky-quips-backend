const express = require('express');
const cors = require('cors')
const app = express();
const port = 5000;
const { notesRouter } = require('./api/v1/index')
require ('./db')

//bodyParser middleware to convert JSON in post call
app.use(express.json())

//cors middleware to communicate between front,back and db
app.use(cors());

app.get('/', (req, res) => {
    res.send("hello world!!!")
})

//improting notes api from the api folder
app.use('/notes' , notesRouter);

//listen call to port
app.listen(port, () => {
    console.log(`🌎 sticky-quips-backend running on port http://localhost:${port}`)
})