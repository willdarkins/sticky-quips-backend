const express = require('express');
require('dotenv').config();
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;
require ('./db')

//bodyParser middleware to convert JSON in post call
app.use(express.json())

const { notesRouter } = require("./api/v1/index");

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