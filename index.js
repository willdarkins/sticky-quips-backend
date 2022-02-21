const express = require('express');
const app = express();
const port = 5000;
//express router declaration
var router = express.Router()


const cors = require('cors')

app.use(cors());

// root (/)
app.get('/', (req, res) => {
    res.send("hello world!!!")
})

app.use('/notes', router)

app.listen(port, () => {
    console.log(`🌎 sticky-quips-backend running on port http://localhost:${port}`)
})