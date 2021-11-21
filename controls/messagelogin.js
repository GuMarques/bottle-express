const Usuario = require("../models/Usuario");

module.exports = function(req, res, next) {
    req.checkLogin = "Teste";
    if(Usuario.isAdmin()) {
        req.message = "Olá Adminstrador " + Usuario.getName();
    } else  if (Usuario.getEmail()) {
        req.message = "Olá " + Usuario.getName();
    } else {
        req.message = "Olá senhor(a)";
    }
    next();
}