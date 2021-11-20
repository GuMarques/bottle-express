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

/* GET descricao page. */
router.get('/time', function(req, res, next) {
  res.render('time', { title: 'Nosso Time' });
});

/* GET descricao page. */
router.get('/contato', function(req, res, next) {
  res.render('contato', { title: 'Entre em COntato' });
});



module.exports = router;
