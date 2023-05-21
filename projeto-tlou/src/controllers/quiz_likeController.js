const { response } = require("express");
var quiz_likeModel = require("../models/quiz_likeModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA quiz_likeController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    quiz_likeModel.listar()
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

function likeByQuiz(req, res) {
    quiz_likeModel.likeByQuiz()
        .then((resultado) => {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send('Nenhum resultado encontrado');
            }
        }).catch(
            (erro) => {
                console.log(erro)
                res.status(500).json(erro.sqlMessage)
            }
        )
}

function likeByQuizId(req, res) {
        quiz_likeModel.likeByQuizId()
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

module.exports = {
    listar,
    likeByQuiz,
    likeByQuizId,
    testar
}