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

function showQuizUserLike(fkUser) {
    return database.executar(
        `SELECT quiz.idquiz, quiz.name, IFNULL(quiz_like.likeQuiz, 0) AS liked FROM quiz
        LEFT JOIN (SELECT fkQuiz, MAX(likeQuiz) AS likeQuiz FROM quiz_like WHERE fkUser = ${fkUser} GROUP BY fkQuiz) AS quiz_like ON quiz.idquiz = quiz_like.fkQuiz;
        `
    );
}

function insertUserLike(fkUser, fkQuiz) {
    return database.executar(
        `INSERT INTO quiz_like(idquiz_like, likeQuiz, fkQuiz, fkUser) VALUES (1, 1, ${fkQuiz}, ${fkUser});
        `
    );
}

function deleteUserLike(fkUser, fkQuiz) {
    return database.executar(
        `DELETE FROM quiz_like WHERE fkUser = ${fkUser} AND fkQuiz = ${fkQuiz};
        `
    );
}

module.exports = {
    showQuizUserLike,
    likeByQuiz,
    listar,
    likeByQuizId,
    insertUserLike,
    deleteUserLike,
};