var express = require('express');
const whisky = require("../database/whisky");
var router = express.Router();


router.get('/list', async function (req, res, next) {
    res.send(await whisky.getWhiskys());
});

router.get('/:id', async function (req, res, next) {
    const id = req.params.id;
    res.send(await whisky.getWhiskyById(id));
});

router.get('/user/:id', async function(req, res) {
    const userId = req.params.id;
    res.send(await whisky.getWhiskysByUserId(userId));
})

router.post("/", async function (req, res) {
    let resposta = {status: true}
    console.log(req.body);
    const {imgLink, nome, destilaria, localidade, descricao, nota, review/* , userId */} = req.body;
    if (!imgLink || !nome || !destilaria || !localidade || !descricao || !nota || !review /* || !userId */) {
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
        imgLink,
        /* userId, */
    }
    const id = await whisky.insertWhisky(obj);
    resposta.whiskyId = id;
    res.json(resposta);
});

router.put("/", async function (req, res) {
    let resposta = {status: true}
    const {imgLink, nome, destilaria, localidade, descricao, nota, review, id/* , userId */} = req.body;
    if (!imgLink || !nome || !destilaria || !localidade || !descricao || !nota || !review || !id /* || !userId */) {
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
        imgLink,
        /* userId */
    }
    const whiskyId = await whisky.updateWhisky(id, obj);
    resposta.whiskyId = whiskyId;
    res.json(resposta);
});

router.delete("/:id", function (req, res){
    let resposta = {status: true}
    if (!whisky.deleteWhisky(req.params.id)){
        res.statusCode = 500;
        resposta.status = false;
        resposta.error = "Falha ao excluir o registro";
    }
    res.json(resposta);
});

module.exports = router;
