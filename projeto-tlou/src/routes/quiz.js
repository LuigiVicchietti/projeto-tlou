var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.get("/", function (req, res) {
    quizController.testar(req, res);
});

router.get("/listar", function (req, res) {
    quizController.listar(req, res);
});

router.get("/listar/:idQuiz", function (req, res) {
    quizController.listarPorUsuario(req, res);
});

module.exports = router;