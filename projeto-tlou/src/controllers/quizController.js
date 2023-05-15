var quizModel = require("../models/quizModel");

function testar(req, res) {
    console.log("ENTRAMOS NO quizController");
    res.send("ENTRAMOS NO QUIZ CONTROLLER");
}

function listar(req, res) {
    quizModel.listar().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os quizes: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    testar,
    listar
}