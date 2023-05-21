var database = require("../database/config")

function listar() {
    var instrucao = `
        SELECT * FROM quiz_like;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function likeByQuiz() {
    var instrucao = `
        SELECT COUNT(likeQuiz) AS 'qtdTotalLike' FROM quiz_like WHERE likeQuiz = 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function likeByQuizId() {
    return database.executar(
        `SELECT idquiz AS 'idQuiz', COUNT(likeQuiz) AS 'quizLikes' FROM quiz_like JOIN quiz ON idquiz = fkQuiz WHERE likeQuiz = 1 GROUP BY idQuiz;
        `
    );
}

module.exports = {
    likeByQuiz,
    listar,
    likeByQuizId
};