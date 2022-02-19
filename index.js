const express = require('express');
const app = express();
const port = 5000;

app.listen(port, () => {
    console.log(`🌎 sticky-quips-backend running on port https://localhost:${port}`)
})