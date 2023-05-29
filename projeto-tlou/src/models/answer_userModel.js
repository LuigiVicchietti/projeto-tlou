var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM answer_user;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function addAnswerUser(tentativa, answerUser, status, time, fkQuiz, fkQuestion, fkUser) {
    var instrucao = `
        INSERT INTO answer_user (idanswer_user, answer, status, timeSend, fkQuiz_answer, fkQuestion, fkUser_answer) VALUES (${tentativa}, ${answerUser}, ${status}, '${time}', ${fkQuiz}, ${fkQuestion}, ${fkUser});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function answerPerQuestion(fkQuiz) {
    var instrucao = `
    SELECT q.question AS questao, COUNT(status) AS soma FROM answer_user AS auser JOIN question AS q ON auser.fkQuestion = q.idquestion WHERE status = 1 AND fkQuiz_answer = ${fkQuiz} GROUP BY questao;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function statusAnswer(fkUser, fkQuiz) {
    var instrucao = `
    SELECT idanswer_user AS tentativa, username, ( (SELECT COUNT(status) FROM answer_user AS auser JOIN user AS user ON auser.fkUser_answer = user.iduser WHERE status = 1 AND iduser = ${fkUser}) ) AS acertos, 
	( (SELECT COUNT(status) FROM answer_user AS auser JOIN user AS user ON fkUser_answer = user.iduser WHERE status = 0 AND iduser = ${fkUser}) ) AS erros FROM answer_user AS auser 
		JOIN user AS user ON auser.fkUser_answer = user.iduser WHERE fkQuiz_answer = ${fkQuiz} AND iduser = ${fkUser} AND idanswer_user = (select max(idanswer_user) from answer_user JOIN user AS user ON fkUser_answer = user.iduser WHERE iduser = ${fkQuiz})
					GROUP BY username, tentativa ORDER BY tentativa DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function showLastStatus(fkUser, fkQuiz) {
    var instrucao = `
    SELECT idanswer_user, username, COUNT( (SELECT COUNT(status) FROM answer_user AS auser JOIN user AS user ON auser.fkUser_answer = user.iduser WHERE status != 0 AND iduser = ${fkUser}) ) AS acertos, 
    timeSend AS tempo FROM answer_user JOIN user ON fkUser_answer = iduser 
	    WHERE iduser = ${fkUser} AND status != 0 AND fkQuiz_answer = ${fkQuiz} AND 
		    (SELECT COUNT(status) FROM answer_user AS auser JOIN user AS user ON auser.fkUser_answer = user.iduser WHERE status = 1 AND iduser = ${fkUser})
			    GROUP BY idanswer_user, username, timeSend ORDER BY idanswer_user DESC LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function showTry(fkUser) {
    var instrucao = `
    select max(idanswer_user) AS tentativa from answer_user where fkUser_answer = ${fkUser};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    showTry,
    showLastStatus,
    statusAnswer,
    answerPerQuestion,
    addAnswerUser,
    listar,
};