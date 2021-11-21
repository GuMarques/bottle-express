let login = '';
let senha = '';
let nome = ''
let admin = false;
let logado = false;

module.exports = {
    Login: function(email, senha) {
        login = email;
        senha = senha;
        admin = false;
        nome = process.env.NORMAL_NAME;
        logado = true;
    },
    LoginAdmin: function(email, senha) {
        login = email;
        senha = senha;
        admin = true;
        nome = process.env.ADMIN_NAME;
        logado = true;
    },
    Logout: function() {
        login = '';
        senha = '';
        admin = false;
        nome = '';
        logado = false;
    },
    getEmail: function() {
        return login;
    },
    isAdmin: function() {
        return admin;
    },
    isLogado: function() {
        return logado;
    },
    getName: function() {
        return nome;
    },
    setName: function(name) {
        nome = name;
    }
}