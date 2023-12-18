const express = require('express');
require('dotenv').config();
const port = process.env.PORT;
const app = express();
const cors = require('cors');
const fs = require('fs');
const path = require('path');

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Middleware to parse POST request data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Serve static files from the "public" directory
app.use(express.static('public'));

app.get('/', (req, res) => {
    // res.send('HAPPY BIRTHDAY MARO BHAI !!!');
    return res.render('index', { message: 'Message sent successfully' });
})




app.listen(port, () => {
    console.log(`Server running on port ${port}`);console.log(`http://localhost:${port}`);
})
