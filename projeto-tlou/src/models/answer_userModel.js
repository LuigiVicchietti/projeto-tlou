var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM answer_user;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function addAnswerUser(answerUser, status, time, fkQuiz, fkQuestion, fkUser) {
    var instrucao = `
        INSERT INTO answer_user (idanswer_user, answer, status, timeSend, fkQuiz_answer, fkQuestion, fkUser_answer) VALUES (1, ${answerUser}, ${status}, '${time}', ${fkQuiz}, ${fkQuestion}, ${fkUser});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}



module.exports = {
    addAnswerUser,
    listar,
};