let Usuario = require("../models/Usuario");

module.exports = function(req, res, next) {
    Usuario.Logout();
    return next();
}