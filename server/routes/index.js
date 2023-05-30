const express = require('express');

// import users route
const usersRoutes = require('./api/users');

const router = express.Router();

router.use('/users', usersRoutes);

module.exports = router;