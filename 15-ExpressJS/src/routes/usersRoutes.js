const express = require('express');
const router = express.Router();
const Users = require('../models/Users');

const {
  register,
  login,
  find,
  findAll,
  update,
  remove,
} = require('../services/usersServices');

const auth = require('../middlewares/authentication');
const logger = require('../middlewares/logger');

router.post('/register', register);
router.post('/login', login);
router.get('/:id', find);
router.get('/', auth, logger, findAll); //secure
router.patch('/', update);
router.delete('/:id', auth, remove); //secure

//REST API

/*
CRUD
 - Create: Post
 - Read: Get
 - Update: Patch
 - Delete: Delete
*/

module.exports = router;
