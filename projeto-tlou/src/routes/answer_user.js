var express = require("express");
var router = express.Router();

var answer_userController = require("../controllers/answer_userController");

router.get("/", function (req, res) {
    answer_userController.testar(req, res);
});

router.get("/listar", function (req, res) {
    answer_userController.listar(req, res);
});

router.post("/addAnswerUser", function (req, res) {
    answer_userController.addAnswerUser(req, res);
})

router.post("/answerPerQuestion", function (req, res) {
    answer_userController.answerPerQuestion(req, res);
})

router.post("/statusAnswer", function (req, res) {
    answer_userController.statusAnswer(req, res);
})

router.post("/showLastStatus", function (req, res) {
    answer_userController.showLastStatus(req, res);
})

module.exports = router;