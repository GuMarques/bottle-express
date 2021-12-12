var express = require('express');
var router = express.Router();

const Usuario = require('../models/Usuario');
const messagelogin = require('../controls/messagelogin');
const {startDatabase} = require('../database/mongo');
const {insertUser, getUser} = require('../database/user');

/* GET home page. */
router.get('/', messagelogin, function(req, res, next) {
  const message = req.message;
  res.render('index', { title: 'Descubra novos Whiskeys Incriveis', email: Usuario.getEmail, isLogado: Usuario.isLogado, admin: Usuario.isAdmin, nome: Usuario.getName, message: message });
});

/* GET ferramentas e tecnologias page. */
router.get('/ferramentas', function(req, res, next) {
  res.render('ferramentas', { title: 'Ferramentas e Tecnologias', email: Usuario.getEmail, admin: Usuario.isAdmin, nome: Usuario.getName});
});

/* GET descricao page. */
router.get('/descricao', function(req, res, next) {
  res.render('descricao', { title: 'Descrição', email: Usuario.getEmail, admin: Usuario.isAdmin, nome: Usuario.getName});
});

/* GET descricao page. */
router.get('/time', function(req, res, next) {
  res.render('time', { title: 'Nosso Time', email: Usuario.getEmail, admin: Usuario.isAdmin, nome: Usuario.getName});
});

/* GET descricao page. */
router.get('/contato', function(req, res, next) {
  res.render('contato', { title: 'Entre em Contato', email: Usuario.getEmail, admin: Usuario.isAdmin, nome: Usuario.getName});
});

const loginControl = require('../controls/login');

router.post('/login', loginControl, function(req, res) {
  res.redirect('/');
});

const logoutControl = require('../controls/logout');

router.get('/logout', logoutControl, function(req, res) {
  res.redirect('/');
});

const controlLogin = require('../controls/controllogin');

router.get('/mudarnome', controlLogin, function(req, res) {
  res.render('alterarnome', { title: 'Altere seu Nome', email: Usuario.getEmail, admin: Usuario.isAdmin, nome: Usuario.getName})
});

router.post('/mudarnome', controlLogin, function(req, res) {
  Usuario.setName(req.body.nome);
  res.redirect('/');
})

startDatabase().then(async () => {
  await insertUser({title: 'Hello, now from the in-memory database!'});
});

module.exports = router;
