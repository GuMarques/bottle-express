var express = require('express');
const whisky = require("../database/whisky");
var router = express.Router();

/* GET users listing. */
router.get('/list', async function (req, res, next) {
    res.send(await whisky.getWhisky());
});

router.post("/edit/:id/:name", async function (req, res) {
    let resposta = {status: true}
    if (req.params.name === null || req.params.name === undefined || req.params.name === "") {
        res.statusCode = 500;
        resposta.status = false;
        resposta.error = "O nome do whisky não pode ser vazio!";
        res.json(resposta);
        return
    }
    await whisky.updateWhisky(req.params.id, {name: req.params.name});
    res.json(resposta);
})

router.post("/:name", async function (req, res) {
    let resposta = {status: true}
    if (req.params.name === null || req.params.name === undefined || req.params.name === "") {
        res.statusCode = 500;
        resposta.status = false;
        resposta.error = "O nome do whisky não pode ser vazio!";
        res.json(resposta);
        return
    }
    await whisky.insertWhisky({name: req.params.name});
    res.json(resposta);
})

router.delete("/:id", function (req, res){
    let resposta = {status: true}
    if (!whisky.deleteWhisky(req.params.id)){
        res.statusCode = 500;
        resposta.status = false;
        resposta.error = "Falha ao exlcuir o registro";
    }
    res.json(resposta);
})

module.exports = router;
