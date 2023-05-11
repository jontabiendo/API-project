const router = require('express').Router();
const { restoreUser } = require('../../utils/auth');

const { User } = require('../../db/models');

router.post('/test', (req, res) => {
    res.json({ requestBody: req.body });
});

router.use(restoreUser);


module.exports = router;
