const express = require('express');
const router = express.Router();
const data = require('../data/books.json');

router.get ('/',  (req, res) => {
    //console.log(data);
    res.status(200).json(data);
});

router.get('/:bookid', (req, res) => {
    //console.log(req.params);
    const requrestedBookId = req.params.bookid;

    const book = data.books.filter(bookInData => {
        if(bookInData.id.toString() === requrestedBookId) {
            return bookInData;
        }
    });
    res.status(200).json(book);
});

module.exports = router;