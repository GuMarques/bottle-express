let Usuario = require("../models/Usuario");

module.exports = function(req, res, next) {
    if(req.body.email && req.body.senha) {
        const email = req.body.email;
        const senha = req.body.senha;
        if(email === process.env.NORMAL_LOGIN
          && senha === process.env.NORMAL_PASSWORD) {
            Usuario.Login(email, senha);
        } else if (email === process.env.ADMIN_LOGIN
                && senha === process.env.ADMIN_PASSWORD) {
            Usuario.LoginAdmin(email, senha);
        } else {
            Usuario.Logout;
        }
      } else {
          Usuario.Logout;
      }
    return next();
}