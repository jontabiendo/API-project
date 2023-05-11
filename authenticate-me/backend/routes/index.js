const express = require('express');
const router = express.Router();
const apiRouter = require('./api');

router.get('/api/csrf/restore', (req, res) => {
    const csrfToken = req.csrfToken();
    res.cookie('token', csrfToken);
    res.status(200).json({
        'XSRF-TOKEN': csrfToken
    });
});

router.use('/api', apiRouter)

module.exports = router
