var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM user;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM user WHERE email = '${email}' AND password = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(username, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", username, email, senha);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO user (username, email, password) VALUES ('${username}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function exibirRankDash() {
    return database.executar(
        `SELECT u.username AS 'NomeUser', COUNT(aU.status) AS 'Pontuacao' FROM user AS u JOIN answer_user AS aU ON aU.fkUser_answer
        WHERE status = 1 AND iduser = fkUser_answer
        GROUP BY aU.status, u.username ORDER BY COUNT(aU.status) DESC;`
    );
}

function exibirUser() {
    return database.executar(
        `SELECT COUNT(iduser) AS 'idUser' FROM user;`
    );
}

function whoGabaritou() {
    return database.executar(
        `select count(distinct user.username) as QtdGabaritou from user join 
        (select iduser, username, sum(status) as somatorio from user JOIN answer_user ON iduser = fkUser_answer group by username, iduser) as gabaritou
        on user.iduser = gabaritou.iduser
        where gabaritou.somatorio = 12;`
    );
}

module.exports = {
    entrar,
    cadastrar,
    listar,
    exibirRankDash,
    exibirUser,
    whoGabaritou
};