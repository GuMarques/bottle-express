var express = require('express');
const user = require("../database/user");
var router = express.Router();

router.get('/list', async function (req, res, next) {
    res.send(await user.getUsers());
});

router.get('/:id', async function (req, res, next) {
    const id = req.params.id;
    res.send(await user.getUserById(id));
});

router.post("/", async function (req, res) {
    let resposta = {status: true}
    const { nome, email, senha} = req.body;
    if (!nome || !email || !senha) {
        res.statusCode = 500;
        resposta.status = false;
        resposta.error = "Todos campos devem ser preenchidos";
        res.json(resposta);
        return
    }
    const obj = {
        nome,
        email,
        senha
    }
    const id = await user.insertUser(obj);
    resposta.userId = id;
    res.json(resposta);
})

router.put("/", async function (req, res) {
    let resposta = {status: true}
    const { id, nome, email, senha} = req.body;
    if (!nome || !email || !senha || !id) {
        res.statusCode = 500;
        resposta.status = false;
        resposta.error = "Todos campos devem ser preenchidos";
        res.json(resposta);
        return
    }
    const obj = {
        nome,
        email,
        senha
    }
    const userId = await user.updateUser(id, obj);
    resposta.userId = userId;
    res.json(resposta);
})

router.delete("/:id", function (req, res){
    let resposta = {status: true}
    if (!user.deleteUser(req.params.id)){
        res.statusCode = 500;
        resposta.status = false;
        resposta.error = "Falha ao excluir o registro";
    }
    res.json(resposta);
})

module.exports = router;
