var express = require("express");
var router = express.Router();

var quiz_likeController = require("../controllers/quiz_likeController");

router.get("/", function (req, res) {
    quiz_likeController.testar(req, res);
});

router.get("/listar", function (req, res) {
    quiz_likeController.listar(req, res);
});

router.get("/likeByQuiz", function (req, res) {
    quiz_likeController.likeByQuiz(req, res);
});

router.get("/likeByQuizId", function (req, res) {
    quiz_likeController.likeByQuizId(req, res);
});

router.post("/showQuizUserLike", function (req, res) {
    quiz_likeController.showQuizUserLike(req, res);
});

module.exports = router;