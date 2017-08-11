var express = require('express')
var router = express.Router();

var genController = require('../controllers/genController')

router.get('/pen',genController.getAllPen);
router.delete('/pen/:id',genController.deletePen);

router.get('/book',genController.getAllBook);
router.delete('/book/:id',genController.deleteBook);
router.post('/book',genController.saveBook);

module.exports = router;