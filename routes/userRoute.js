const express = require('express');
const { check } = require('express-validator');

const router = express.Router();

router.get('/users', async (req, res) => {
  const userData = await require('./mock/users.json');
  res.json(userData);
})


module.exports = router;
