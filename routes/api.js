const express = require('express');
const router = express.Router();

const controllers = require('../controllers');

router.get('/menu', controllers.menu.get);
router.post('/menu', controllers.menu.post);

router.get('/store', controllers.store.get);
router.post('/store', controllers.store.post);

router.get('/team', controllers.team.get);
router.post('/team', controllers.team.post);

router.get('user', controllers.user.get);
router.post('/user', controllers.user.post);

module.exports = router;
