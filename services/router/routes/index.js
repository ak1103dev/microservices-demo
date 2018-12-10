const { Router } = require('express');
// const users = require('./users');

const router = Router();
router.use('/', (req, res) => res.send('Hello World'))
// router.use('/users', users);

module.exports = router;
