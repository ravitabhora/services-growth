const express = require('express');
const router = express.Router();
const Validator = require('../../middlewares/Validators')

router.get('/', (req, res) => {
  res.send({message : 'This is the user homepage'});
});

router.post('/login', Validator('usersLoginValidator'), (req, res) => {
    res.send({message : 'loginSuccessful'});
  });

router.post('/register', Validator('usersRegisterValidator'), (req, res, next) => {

    res.json({ a: "accessToken",b : "refreshToken" })
})

router.get('/:userId', (req, res) => {
  const userId = req.params.userId;
  res.send(`This is the user profile for user ID ${userId}`);
});

module.exports = router;