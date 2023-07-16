const express = require('express');


const { getPasswords, postPassword} = require('../controllers/password')


const router = express.Router();

router.post('/', postPassword);
router.get('/', getPasswords);


module.exports = router;
