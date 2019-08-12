const express = require('express');
const router = express.Router();

const controllers = require('../controllers');

router.get('/menu', controllers.menu.get);
router.post('/menu', controllers.menu.post);

module.exports = router;
