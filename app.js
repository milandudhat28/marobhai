const express = require('express');
const port = 3030;
const app = express();



app.get('/', (req, res) => {
    res.send('HAPPY BIRTHDAY MARO BHAI !!!');
})




app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})