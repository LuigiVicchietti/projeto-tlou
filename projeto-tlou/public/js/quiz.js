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
    , btnFinish = document.getElementById("btn_finalizar")
    , section1 = document.getElementById("content_question")
    , section2 = document.getElementById("result_content");

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

    let correctAnswers = 0;
    for (let i = 0; i < statusAnswer.length; i++) {
        correctAnswers += statusAnswer[i];
    }

    if (correctAnswers == 12) {
        result_box.innerHTML = `
            <img style="width: 30vw;" class="question-photos select-disable"
                src="https://media.tenor.com/qnMzDiqQOUgAAAAC/last-of-us2-last-of-us.gif" alt="Ellie Feliz">
            <div>
                <span class="gold-gradient select-disable" id="circle_result">
                <span><text style="color: #DAA250;" name="qtdAcertos">${correctAnswers}</text> / 12</span></span>
                <h3>Você acertou <text style="color: #DAA250;">${correctAnswers}</text> questões!</h3>
                <p id="text_result">Boa! Você acertou <text style="color: #DAA250;"
                    name="qtdAcertos">${correctAnswers}</text>
                    questões do quiz!
                    Você com certeza gosta da série e manja de algumas coisas desse universo. Quem sabe um pouco
                    mais de introspecção nesse universo não te faz se apaixonar mais pela série?!</p>
            </div>
        `
    } else if (correctAnswers > 9) {
        result_box.innerHTML = `
            <img style="width: 30vw;" class="question-photos select-disable"
                src="https://media.giphy.com/media/VdhTYle3b9a6jtO7FJ/giphy.gif" alt="Ellie Feliz">
            <div>
                <span class="green-gradient select-disable" id="circle_result"><span><text style="color: #74C365;" name="qtdAcertos">${correctAnswers}</text> / 12</span></span>
                <h3>Você acertou <text style="color: #74C365;">${correctAnswers}</text> questões!</h3>
                <p id="text_result">Caramba! Você acertou <text style="color: #74C365;" name="qtdAcertos">${correctAnswers}</text>
                    questões do quiz!
                    Você entende de muita coisa dessa série! Com certeza deve acompanhar a série e gosta muito desse
                    universo. Parabéns!</p>
            </div>
        `
    } else if (correctAnswers > 4 && correctAnswers <= 9) {
        result_box.innerHTML = `
        <img style="width: 30vw;" class="question-photos select-disable"
              src="https://media.giphy.com/media/Sw6fiilaRDWz7KW5x5/giphy.gif" alt="Ellie Feliz">
        <div>
            <span class="blue-gradient select-disable" id="circle_result">
            <span><text style="color: cornflowerblue;" name="qtdAcertos">${correctAnswers}</text> / 12</span></span>
            <h3>Você acertou <text style="color: cornflowerblue;">${correctAnswers}</text> questões!</h3>
                <p id="text_result">Boa! Você acertou <text style="color: cornflowerblue;"
                    name="qtdAcertos">${correctAnswers}</text>
                    questões do quiz!
                    Você com certeza gosta da série e manja de algumas coisas desse universo. Quem sabe um pouco
                    mais de introspecção nesse universo não te faz se apaixonar mais pela série?!</p>
        </div>
        `
    } else {
        result_box.innerHTML = `
            <img style="width: 30vw;" class="question-photos select-disable"
                src="https://media.giphy.com/media/elK9EJTjefNmfP8WKj/giphy.gif" alt="Ellie triste">
            <div>
                <span class="red-gradient select-disable" id="circle_result">
                    <span><text style="color: #FF5555;" name="qtdAcertos">${correctAnswers}</text> / 12</span>                </span>
                    <h3>Você acertou <text style="color: #FF5555;">${correctAnswers}</text> questões!</h3>
                    <p id="text_result">Putz! Você acertou <text style="color: #FF5555;" name="qtdAcertos">${correctAnswers}</text> questões do quiz!
                        Talvez você não acompanhe muito o universo da série ou deu um branco safado! Na proxima vez você arrebenta!</p>
            </div>
        `
    }

    section1.classList.toggle('hide');
    setTimeout(function () { section1.style.display = "none"; }, 410);
    setTimeout(function () { section2.style.display = "flex"; }, 411);
    setTimeout(function () { section2.classList.toggle("show"); }, 450);
    return false
}