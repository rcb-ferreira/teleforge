const express = require('express');
const router = express.Router();

const Deque = require('../controllers/deque');

router.get('/show', Deque.show);
router.get('/prepend', Deque.prepend);
router.post('/pop', Deque.pop);
router.get('/append', Deque.append);
router.delete('/eject', Deque.eject);

module.exports = router;