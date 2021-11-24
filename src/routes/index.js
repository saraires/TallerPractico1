"use strict"

const { Router } = require('express');
const router = Router();

router.get('/test', (req, res) => {
    const data = {
        "name": "Fazt",
        "Website": "Faztweb.com"
    }
    res.json(data);
})

module.exports = router;