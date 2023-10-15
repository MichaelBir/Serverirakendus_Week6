const express = require('express');
const router = express.Router();
const data = require('../data/countries.json');

router.get ('/',  (req, res) => {
    //console.log(data);
    res.status(200).json(data);
});

router.get('/:countryid', (req, res) => {
    //console.log(req.params);
    const requrestedCountryId = req.params.countryid;

    const country = data.countries.filter(countryInData => {
        if(countryInData.id.toString() === requrestedCountryId) {
            return countryInData;
        }
    });
    res.status(200).json(country);
});

module.exports = router;