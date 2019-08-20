const express = require('express');
const router = express.Router();

const Deque = require('../controllers/deque');

router.get('/show', Deque.show);
router.post('/prepend', Deque.prepend);
router.delete('/pop', Deque.pop);
router.post('/append', Deque.append);
router.delete('/eject', Deque.eject);

module.exports = router;