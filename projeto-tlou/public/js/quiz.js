var questionAnswer = [];

document.addEventListener('DOMContentLoaded', () => {
    fetch('/quiz/listar', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    }).then((resposta) => {
        if (resposta.ok) {
            console.log(resposta);
            resposta.json().then((jsonInfo) => {
                jsonInfo.forEach(quiz => {
                    i = 0;
                    console.log(quiz.idQuiz);
                    if (quiz.idQuiz === 1) {
                        sessionStorage.ID_QUIZ = quiz.idQuiz;
                        console.log('Pegou o id correto')

                    } else {
                        console.log('Não pegou o id correto')
                    }
                    i++
                })
            })
        } else {
            console.log('Erro no .THEN');
        }
    })
})

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(function () {
        fetch('/question/listar', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        }).then((resposta) => {
            if (resposta.ok) {
                console.log(resposta);
                resposta.json().then((jsonInfoQuestion) => {
                    if (sessionStorage.ID_QUIZ == 1) {
                        console.log('Pegou o id correto')
                        jsonInfoQuestion.forEach(question => {
                            questionAnswer.push(question.answer)
                        });

                    } else {
                        console.log('Não pegou o id correto')
                    }
                })
            } else {
                console.log('Erro no .THEN');
            }
        })
    }, 500);
})

const btnPlay = document.getElementById("btn_play")
    , startBox = document.getElementById("letstart")
    , btnFinish = document.getElementById("btn_finalizar");

//Criando o cronômetro
let hora = 0
    , minuto = 0
    , seg = 0;
let cronoGeral;

function startCrono() {
    pauseCrono();
    cronoGeral = setInterval(() => { timer(); }, 1000)
}
function pauseCrono() {
    clearInterval(cronoGeral);
}

function timer() {
    if ((seg += 1) == 60) {
        seg = 0;
        minuto++;
    }
    if (minuto == 60) {
        minuto = 0;
        hora++;
    }
    document.getElementById('hour').innerText = returnData(hora);
    document.getElementById('min').innerText = returnData(minuto);
    document.getElementById('sec').innerText = returnData(seg);
}
function returnData(input) {
    return input > 9 ? input : `0${input}`
}

var questionObj = {};
var liBoxes = {};

for (i = 1; i <= 12; i++) {
    questionObj[`question${i}`] = `question${i}_box`;
    liBoxes[`li${i}`] = `li_Q${i}`;
}

function startQuiz() {
    startCrono();

    let boxInicio = questionObj[`question1`];
    startBox.classList.toggle('hide');
    setTimeout(function () { startBox.style.display = "none"; }, 410);
    setTimeout(function () { document.getElementById(boxInicio).style.display = "flex"; }, 411);
    setTimeout(function () { document.getElementById(boxInicio).classList.toggle("show"); }, 450);
}

let G = 1;
function goAHead() {
    if (document.querySelector(`input[name="answerQ${G}"]:checked`)) {
        let check = liBoxes[`li${G}`]
        document.getElementById(check).classList.add(`answered`);
    }

    let boxAtual = questionObj[`question${G}`];
    let boxFutura = questionObj[`question${G + 1}`];

    document.getElementById(boxAtual).classList.toggle('show');
    setTimeout(function () { document.getElementById(boxAtual).style.display = "none"; }, 410);
    setTimeout(function () { document.getElementById(boxFutura).style.display = "flex"; }, 411);
    setTimeout(function () { document.getElementById(boxFutura).classList.toggle("show"); }, 450);
    G++
}
function goBack() {
    if (document.querySelector(`input[name="answerQ${G}"]:checked`)) {
        let check = liBoxes[`li${G}`]
        document.getElementById(check).classList.add(`answered`);
    }

    let boxAtual = questionObj[`question${G}`];
    let boxPassada = questionObj[`question${G - 1}`];

    document.getElementById(boxAtual).classList.toggle('show');
    setTimeout(function () { document.getElementById(boxAtual).style.display = "none"; }, 410);
    setTimeout(function () { document.getElementById(boxPassada).style.display = "flex"; }, 411);
    setTimeout(function () { document.getElementById(boxPassada).classList.toggle("show"); }, 450);
    G--
}
function markOn12() {
    li_Q12.classList.add("answered");
}

var answerUserArray = [];
var statusAnswer = [];

function finish() {
    pauseCrono();
    let tempoTotal = document.getElementById('hour').innerText + `:` + document.getElementById('min').innerText + `:` + document.getElementById('sec').innerText

    for (let i = 1; i <= 12; i++) {
        answerChoosen = document.querySelector(`input[name="answerQ${i}"]:checked`).value;
        answerUserArray.push(answerChoosen)

        if (answerUserArray[i - 1] != questionAnswer[i - 1]) {
            answerStatus = 0
            statusAnswer.push(answerStatus);
        } else {
            answerStatus = 1
            statusAnswer.push(answerStatus);
        }

        var answerUser = answerUserArray[i - 1];
        var status = statusAnswer[i - 1];
        var time = tempoTotal;
        var fkQuiz = sessionStorage.ID_QUIZ;
        var fkQuestion = i;
        var fkUser = sessionStorage.ID_USUARIO;

        if (answerUser === "" || status === "" || time === "" || fkQuiz === "" || fkQuestion === "" || fkUser === "") {
            console.log(`Alguma variável está nula`);
            return false;
        } else {
            console.log(`Resposta validada. Seguindo...`)
        }
        fetch("/answer_user/addAnswerUser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                answerUserServer: answerUser,
                statusServer: status,
                timeServer: time,
                fkQuizServer: fkQuiz,
                fkQuestionServer: fkQuestion,
                fkUserServer: fkUser,
            })
        }).then(function (resposta) {

            console.log("resposta: ", resposta);

            if (resposta.ok) {
                console.log("Resposta inserida com sucesso!");
            } else {
                throw ("Houve um erro ao responder o quiz!");
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
    }
    console.log("Quiz realizado com sucesso!");
    return false
}