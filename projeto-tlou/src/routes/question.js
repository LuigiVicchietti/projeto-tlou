var express = require("express");
var router = express.Router();

var questionController = require("../controllers/questionController");

router.get("/", function (req, res) {
    questionController.testar(req, res);
});

router.get("/listar", function (req, res) {
    questionController.listar(req, res);
});

module.exports = router;