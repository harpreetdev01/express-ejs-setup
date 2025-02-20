const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('about', {text: "About ESJ text"});
});

module.exports = router;