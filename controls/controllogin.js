const Usuario = require("../models/Usuario");

module.exports = function(req, res, next) {
    if(Usuario.getEmail().length <= 0) {
        res.redirect('/')
    } else {
        next();
    }
}