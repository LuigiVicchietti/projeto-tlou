const { response } = require("express");
var answer_userModel = require("../models/answer_userModel");

var sessoes = [];
var numTentativas = [];
if(numTentativas.length == 12) {
    numTentativas = [];
}

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

async function addAnswerUser(req, res) {
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
        let tentativaVar = 1;
        await answer_userModel.showTry(fkUser).then((resposta) => {
            if (resposta.length > 0) {
                tentativaVar += Number(resposta[0].tentativa)
                numTentativas.push(tentativaVar)
            }
        }).then(async function () {
            await answer_userModel.addAnswerUser(numTentativas[0], answerUser, status, time, fkQuiz, fkQuestion, fkUser)
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
        })
    }
}

function answerPerQuestion(req, res) {
    var fkQuiz = req.body.fkQuizServer;

    if (fkQuiz == undefined) {
        res.status(400).send("A fkQuiz está undefined!");
    } else {
        answer_userModel.answerPerQuestion(fkQuiz)
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

function statusAnswer(req, res) {
    var fkUser = req.body.fkUserServer;
    var fkQuiz = req.body.fkQuizServer;

    if (fkUser == undefined) {
        res.status(400).send("A FK User está undefined!");
    } else if (fkQuiz == undefined) {
        res.status(400).send("A FK Quiz está undefined!");
    } else {
        answer_userModel.statusAnswer(fkUser, fkQuiz)
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

function showLastStatus(req, res) {
    var fkUser = req.body.fkUserServer;
    var fkQuiz = req.body.fkQuizServer;

    if (fkUser == undefined) {
        res.status(400).send("A FK User está undefined!");
    } else if (fkQuiz == undefined) {
        res.status(400).send("A FK Quiz está undefined!");
    } else {
        answer_userModel.showLastStatus(fkUser, fkQuiz)
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
    showLastStatus,
    statusAnswer,
    answerPerQuestion,
    addAnswerUser,
    listar,
    testar
}