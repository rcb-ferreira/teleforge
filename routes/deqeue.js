const express = require('express');
const router = express.Router();

const Deque = require('../controllers/deqeue');

router.get('/show', Deque.show);

router.post('/prepend', Deque.prepend);
router.post('/append', Deque.append);

router.delete('/pop', Deque.pop);
router.delete('/eject', Deque.eject);

module.exports = router;