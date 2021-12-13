var express = require('express');
const whisky = require("../database/whisky");
var router = express.Router();

/* GET users listing. */
router.get('/list', async function (req, res, next) {
    res.send(await whisky.getWhiskys());
});

router.get('/:id', async function (req, res, next) {
    const id = req.params.id;
    res.send(await whisky.getWhisky(id));
});

router.put("/", async function (req, res) {
    let resposta = {status: true}
    const {imgLink, nome, destilaria, localidade, descricao, nota, review, id} = req.body;
    if (!imgLink || !nome || !destilaria || !localidade || !descricao || !nota || !review || !id) {
        res.statusCode = 500;
        resposta.status = false;
        resposta.error = "Todos campos devem ser preenchidos";
        res.json(resposta);
        return
    }
    const obj = {
        nome,
        destilaria,
        localidade,
        descricao,
        nota,
        review,
        imgLink
    }
    const newId = await whisky.updateWhisky(id, obj);
    resposta.whiskyId = newId;
    res.json(resposta);
})

router.post("/", async function (req, res) {
    let resposta = {status: true}
    const {imgLink, nome, destilaria, localidade, descricao, nota, review} = req.body;
    if (!imgLink || !nome || !destilaria || !localidade || !descricao || !nota || !review) {
        res.statusCode = 500;
        resposta.status = false;
        resposta.error = "Todos campos devem ser preenchidos";
        res.json(resposta);
        return
    }
    const obj = {
        nome,
        destilaria,
        localidade,
        descricao,
        nota,
        review,
        imgLink
    }
    const id = await whisky.insertWhisky(obj);
    resposta.whiskyId = id;
    res.json(resposta);
})

router.delete("/:id", function (req, res){
    let resposta = {status: true}
    if (!whisky.deleteWhisky(req.params.id)){
        res.statusCode = 500;
        resposta.status = false;
        resposta.error = "Falha ao excluir o registro";
    }
    res.json(resposta);
})

module.exports = router;
