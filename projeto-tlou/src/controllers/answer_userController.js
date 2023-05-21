const { response } = require("express");
var answer_userModel = require("../models/answer_userModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA answer_userController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    answer_userModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function addAnswerUser(req, res) {
    var answerUser = req.body.answerUserServer;
    var status = req.body.statusServer;
    var time = req.body.timeServer;
    var fkQuiz = req.body.fkQuizServer;
    var fkQuestion = req.body.fkQuestionServer;
    var fkUser = req.body.fkUserServer;

    if (answerUser == undefined) {
        res.status(400).send("Sua resposta está undefined!");
    } else if (status == undefined) {
        res.status(400).send("O status da resposta está undefined!");
    } else if (time == undefined) {
        res.status(400).send("Seu tempo está undefined!");
    } else if (fkQuiz == undefined) {
        res.status(400).send("O ID do seu quiz está undefined!");
    } else if (fkQuestion == undefined) {
        res.status(400).send("A questão respondida está undefined!");
    } else if (fkUser == undefined) {
        res.status(400).send("O ID do usuário está undefined!");
    } else {

        answer_userModel.addAnswerUser(answerUser, status, time, fkQuiz, fkQuestion, fkUser)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    addAnswerUser,
    listar,
    testar
}