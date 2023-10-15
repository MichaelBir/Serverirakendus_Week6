const express = require('express');
const port = 3000;
//const data = require('./data/books.json');
const booksRouter = require('./router/books');
const countryRouter = require('./router/country');

const app = express();

app.set ('view engine','ejs');

app.get('/', (req, res) => {
    //console.log('hello from get /');
    //res.send('<h1>Hello</h1>');
    //res.sendStatus(500);
    //res.status(500).json({message:"Internal error"});
    //res.download('server.js');
    res.render('index');  
});

app.use('/books', booksRouter); 
app.use('/country', countryRouter); 

app.listen(port, () => {
    console.log(`Server is running ${port}`);
});

