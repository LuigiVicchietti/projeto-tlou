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

function showQuizUserLike(req, res) {
    var fkUser = req.params.fkUser;
    
    if (fkUser == undefined) {
        res.status(400).send("A FK user está undefined!");
    } else {
        quiz_likeModel.showQuizUserLike(fkUser)
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

function insertUserLike(req, res) {
    var fkUser = req.body.fkUserServer;
    var fkQuiz = req.body.fkQuizServer;
    
    if (fkUser == undefined) {
        res.status(400).send("A FK user está undefined!");
    } else if(fkQuiz == undefined) {
        res.status(400).send("A FK quiz está undefined!");
    } else {
        quiz_likeModel.insertUserLike(fkUser, fkQuiz)
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

function deleteUserLike(req, res) {
    var fkUser = req.params.fkUser;
    var fkQuiz = req.params.fkQuiz;

    quiz_likeModel.deleteUserLike(fkUser, fkQuiz)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao deletar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    listar,
    likeByQuiz,
    likeByQuizId,
    showQuizUserLike,
    insertUserLike,
    deleteUserLike,
    testar
}