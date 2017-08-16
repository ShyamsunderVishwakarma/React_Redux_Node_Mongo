var express = require('express')
var router = express.Router();

var genController = require('../controllers/genController')

router.get('/pens',genController.getAllPen);
router.delete('/pens/:id',genController.deletePen);

router.get('/books',genController.getAllBook);
router.delete('/books/:id',genController.deleteBook);
router.post('/books',genController.saveBook);
router.put('/books/:id',genController.updateBook);

module.exports = router;