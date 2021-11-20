var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET ferramentas e tecnologias page. */
router.get('/ferramentas', function(req, res, next) {
  res.render('ferramentas', { title: 'Ferramentas e Tecnologias' });
});

/* GET descricao page. */
router.get('/descricao', function(req, res, next) {
  res.render('descricao', { title: 'Descrição' });
});

module.exports = router;
