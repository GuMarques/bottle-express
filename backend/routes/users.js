var express = require('express');
const user = require("../database/user");
var router = express.Router();

/* GET users listing. */
router.get('/list', async function (req, res, next) {
    res.send(await user.getUser());
});

router.post("/edit/:id/:name", async function (req, res) {
    let resposta = {status: true}
    if (req.params.name === null || req.params.name === undefined || req.params.name === "") {
        res.statusCode = 500;
        resposta.status = false;
        resposta.error = "O nome do usuário não pode ser vazio!";
        res.json(resposta);
        return
    }
    await user.updateUser(req.params.id, {name: req.params.name});
    res.json(resposta);
})

router.post("/:name", async function (req, res) {
    let resposta = {status: true}
    if (req.params.name === null || req.params.name === undefined || req.params.name === "") {
        res.statusCode = 500;
        resposta.status = false;
        resposta.error = "O nome do usuário não pode ser vazio!";
        res.json(resposta);
        return
    }
    await user.insertUser({name: req.params.name});
    res.json(resposta);
})

router.delete("/:id", function (req, res){
    let resposta = {status: true}
    if (!user.deleteUser(req.params.id)){
        res.statusCode = 500;
        resposta.status = false;
        resposta.error = "Falha ao exlcuir o registro";
    }
    res.json(resposta);
})

module.exports = router;
