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

//Declarando cada box de questão
const btnPlay = document.getElementById("btn_play")
    , startBox = document.getElementById("letstart")
    , priBox = document.getElementById("question1_box")
    , secBox = document.getElementById("question2_box")
    , terBox = document.getElementById("question3_box")
    , quaBox = document.getElementById("question4_box")
    , quiBox = document.getElementById("question5_box")
    , sexBox = document.getElementById("question6_box")
    , setBox = document.getElementById("question7_box")
    , oitBox = document.getElementById("question8_box")
    , nonBox = document.getElementById("question9_box")
    , decBox = document.getElementById("question10_box")
    , decPBox = document.getElementById("question11_box")
    , decSBox = document.getElementById("question12_box");

//Declarando botões de ida e volta
const btnFinish = document.getElementById("btn_finalizar");

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

//Declarando os radios inputs
const Q1resp1 = document.getElementById("Q1resp1")
    , Q1resp2 = document.getElementById("Q1resp2")
    , Q1resp3 = document.getElementById("Q1resp3")
    , Q1resp4 = document.getElementById("Q1resp4")
    , Q2resp1 = document.getElementById("Q2resp1")
    , Q2resp2 = document.getElementById("Q2resp2")
    , Q2resp3 = document.getElementById("Q2resp3")
    , Q2resp4 = document.getElementById("Q2resp4")
    , Q3resp1 = document.getElementById("Q3resp1")
    , Q3resp2 = document.getElementById("Q3resp2")
    , Q3resp3 = document.getElementById("Q3resp3")
    , Q3resp4 = document.getElementById("Q3resp4")
    , Q4resp1 = document.getElementById("Q4resp1")
    , Q4resp2 = document.getElementById("Q4resp2")
    , Q4resp3 = document.getElementById("Q4resp3")
    , Q4resp4 = document.getElementById("Q4resp4")
    , Q5resp1 = document.getElementById("Q5resp1")
    , Q5resp2 = document.getElementById("Q5resp2")
    , Q5resp3 = document.getElementById("Q5resp3")
    , Q5resp4 = document.getElementById("Q5resp4")
    , Q6resp1 = document.getElementById("Q6resp1")
    , Q6resp2 = document.getElementById("Q6resp2")
    , Q6resp3 = document.getElementById("Q6resp3")
    , Q6resp4 = document.getElementById("Q6resp4")
    , Q7resp1 = document.getElementById("Q7resp1")
    , Q7resp2 = document.getElementById("Q7resp2")
    , Q7resp3 = document.getElementById("Q7resp3")
    , Q7resp4 = document.getElementById("Q7resp4")
    , Q8resp1 = document.getElementById("Q8resp1")
    , Q8resp2 = document.getElementById("Q8resp2")
    , Q8resp3 = document.getElementById("Q8resp3")
    , Q8resp4 = document.getElementById("Q8resp4")
    , Q9resp1 = document.getElementById("Q9resp1")
    , Q9resp2 = document.getElementById("Q9resp2")
    , Q9resp3 = document.getElementById("Q9resp3")
    , Q9resp4 = document.getElementById("Q9resp4")
    , Q10resp1 = document.getElementById("Q10resp1")
    , Q10resp2 = document.getElementById("Q10resp2")
    , Q10resp3 = document.getElementById("Q10resp3")
    , Q10resp4 = document.getElementById("Q10resp4")
    , Q11resp1 = document.getElementById("Q11resp1")
    , Q11resp2 = document.getElementById("Q11resp2")
    , Q11resp3 = document.getElementById("Q11resp3")
    , Q11resp4 = document.getElementById("Q11resp4")
    , Q12resp1 = document.getElementById("Q12resp1")
    , Q12resp2 = document.getElementById("Q12resp2")
    , Q12resp3 = document.getElementById("Q12resp3")
    , Q12resp4 = document.getElementById("Q12resp4");

// Declarando LI de cada questão
const li_Q1 = document.getElementById("li_Q1")
    , li_Q2 = document.getElementById("li_Q2")
    , li_Q3 = document.getElementById("li_Q3")
    , li_Q4 = document.getElementById("li_Q4")
    , li_Q5 = document.getElementById("li_Q5")
    , li_Q6 = document.getElementById("li_Q6")
    , li_Q7 = document.getElementById("li_Q7")
    , li_Q8 = document.getElementById("li_Q8")
    , li_Q9 = document.getElementById("li_Q9")
    , li_Q10 = document.getElementById("li_Q10")
    , li_Q11 = document.getElementById("li_Q11")
    , li_Q12 = document.getElementById("li_Q12");

var questionObj = {};
var liBoxes = {};

for(i = 1; i <= 12; i++) {
    questionObj[`question${i}`] = document.getElementById(`question${i}_box`);
    liBoxes[`li${i}`] = document.getElementById(`li_Q${i}`);
}

// let G = 0;
// function goAHead() {
//     if (document.querySelector(`input[name="answerQ${G + 1}"]:checked`)) {
//         liBoxes[`li${G}`].classList.add("answered");
//     }

//     questionObj[`question${G}`].classList.toggle('show');
//     setTimeout(function () { questionObj[`question${G}`].style.display = "none"; }, 410);
//     setTimeout(function () { questionObj[`question${G + 1}`].style.display = "flex"; }, 411);
//     setTimeout(function () { questionObj[`question${G + 1}`].classList.toggle("show"); }, 450);
//     G++
// }

function startQuiz() {
    startCrono();
    startBox.classList.toggle('hide');
    setTimeout(function () { startBox.style.display = "none"; }, 410);
    setTimeout(function () { priBox.style.display = "flex"; }, 411);
    setTimeout(function () { priBox.classList.toggle("show"); }, 450);
}
function goQuestion2() {
    if (Q1resp1.checked || Q1resp2.checked || Q1resp3.checked || Q1resp4.checked) {
        li_Q1.classList.add("answered");
    }

    priBox.classList.toggle('show');
    setTimeout(function () { priBox.style.display = "none"; }, 410);
    setTimeout(function () { secBox.style.display = "flex"; }, 411);
    setTimeout(function () { secBox.classList.toggle("show"); }, 450);
}
function backQuestion1() {
    if (Q2resp1.checked || Q2resp2.checked || Q2resp3.checked || Q2resp4.checked) {
        li_Q2.classList.add("answered");
    }

    secBox.classList.toggle('show');
    setTimeout(function () { secBox.style.display = "none"; }, 410);
    setTimeout(function () { priBox.style.display = "flex"; }, 411);
    setTimeout(function () { priBox.classList.toggle("show"); }, 450);
}
function goQuestion3() {
    if (Q2resp1.checked || Q2resp2.checked || Q2resp3.checked || Q2resp4.checked) {
        li_Q2.classList.add("answered");
    }

    secBox.classList.toggle('show');
    setTimeout(function () { secBox.style.display = "none"; }, 410);
    setTimeout(function () { terBox.style.display = "flex"; }, 411);
    setTimeout(function () { terBox.classList.toggle("show"); }, 450);
}
function backQuestion2() {
    if (Q3resp1.checked || Q3resp2.checked || Q3resp3.checked || Q3resp4.checked) {
        li_Q3.classList.add("answered");
    }

    terBox.classList.toggle('show');
    setTimeout(function () { terBox.style.display = "none"; }, 410);
    setTimeout(function () { secBox.style.display = "flex"; }, 411);
    setTimeout(function () { secBox.classList.toggle("show"); }, 450);
}
function goQuestion4() {
    if (Q3resp1.checked || Q3resp2.checked || Q3resp3.checked || Q3resp4.checked) {
        li_Q3.classList.add("answered");
    }

    terBox.classList.toggle('show');
    setTimeout(function () { terBox.style.display = "none"; }, 410);
    setTimeout(function () { quaBox.style.display = "flex"; }, 411);
    setTimeout(function () { quaBox.classList.toggle("show"); }, 450);
}
function backQuestion3() {
    if (Q4resp1.checked || Q4resp2.checked || Q4resp3.checked || Q4resp4.checked) {
        li_Q4.classList.add("answered");
    }

    quaBox.classList.toggle('show');
    setTimeout(function () { quaBox.style.display = "none"; }, 410);
    setTimeout(function () { terBox.style.display = "flex"; }, 411);
    setTimeout(function () { terBox.classList.toggle("show"); }, 450);
}
function goQuestion5() {
    if (Q4resp1.checked || Q4resp2.checked || Q4resp3.checked || Q4resp4.checked) {
        li_Q4.classList.add("answered");
    }

    quaBox.classList.toggle('show');
    setTimeout(function () { quaBox.style.display = "none"; }, 410);
    setTimeout(function () { quiBox.style.display = "flex"; }, 411);
    setTimeout(function () { quiBox.classList.toggle("show"); }, 450);
}
function backQuestion4() {
    if (Q5resp1.checked || Q5resp2.checked || Q5resp3.checked || Q5resp4.checked) {
        li_Q5.classList.add("answered");
    }

    quiBox.classList.toggle('show');
    setTimeout(function () { quiBox.style.display = "none"; }, 410);
    setTimeout(function () { quaBox.style.display = "flex"; }, 411);
    setTimeout(function () { quaBox.classList.toggle("show"); }, 450);
}
function goQuestion6() {
    if (Q5resp1.checked || Q5resp2.checked || Q5resp3.checked || Q5resp4.checked) {
        li_Q5.classList.add("answered");
    }

    quiBox.classList.toggle('show');
    setTimeout(function () { quiBox.style.display = "none"; }, 410);
    setTimeout(function () { sexBox.style.display = "flex"; }, 411);
    setTimeout(function () { sexBox.classList.toggle("show"); }, 450);
}
function backQuestion5() {
    if (Q6resp1.checked || Q6resp2.checked || Q6resp3.checked || Q6resp4.checked) {
        li_Q6.classList.add("answered");
    }

    sexBox.classList.toggle('show');
    setTimeout(function () { sexBox.style.display = "none"; }, 410);
    setTimeout(function () { quiBox.style.display = "flex"; }, 411);
    setTimeout(function () { quiBox.classList.toggle("show"); }, 450);
}
function goQuestion7() {
    if (Q6resp1.checked || Q6resp2.checked || Q6resp3.checked || Q6resp4.checked) {
        li_Q6.classList.add("answered");
    }

    sexBox.classList.toggle('show');
    setTimeout(function () { sexBox.style.display = "none"; }, 410);
    setTimeout(function () { setBox.style.display = "flex"; }, 411);
    setTimeout(function () { setBox.classList.toggle("show"); }, 450);
}
function backQuestion6() {
    if (Q7resp1.checked || Q7resp2.checked || Q7resp3.checked || Q7resp4.checked) {
        li_Q7.classList.add("answered");
    }

    setBox.classList.toggle('show');
    setTimeout(function () { setBox.style.display = "none"; }, 410);
    setTimeout(function () { sexBox.style.display = "flex"; }, 411);
    setTimeout(function () { sexBox.classList.toggle("show"); }, 450);
}
function goQuestion8() {
    if (Q7resp1.checked || Q7resp2.checked || Q7resp3.checked || Q7resp4.checked) {
        li_Q7.classList.add("answered");
    }

    setBox.classList.toggle('show');
    setTimeout(function () { setBox.style.display = "none"; }, 410);
    setTimeout(function () { oitBox.style.display = "flex"; }, 411);
    setTimeout(function () { oitBox.classList.toggle("show"); }, 450);
}
function backQuestion7() {
    if (Q8resp1.checked || Q8resp2.checked || Q8resp3.checked || Q8resp4.checked) {
        li_Q8.classList.add("answered");
    }

    oitBox.classList.toggle('show');
    setTimeout(function () { oitBox.style.display = "none"; }, 410);
    setTimeout(function () { setBox.style.display = "flex"; }, 411);
    setTimeout(function () { setBox.classList.toggle("show"); }, 450);
}
function goQuestion9() {
    if (Q8resp1.checked || Q8resp2.checked || Q8resp3.checked || Q8resp4.checked) {
        li_Q8.classList.add("answered");
    }

    oitBox.classList.toggle('show');
    setTimeout(function () { oitBox.style.display = "none"; }, 410);
    setTimeout(function () { nonBox.style.display = "flex"; }, 411);
    setTimeout(function () { nonBox.classList.toggle("show"); }, 450);
}
function backQuestion8() {
    if (Q9resp1.checked || Q9resp2.checked || Q9resp3.checked || Q9resp4.checked) {
        li_Q9.classList.add("answered");
    }

    nonBox.classList.toggle('show');
    setTimeout(function () { nonBox.style.display = "none"; }, 410);
    setTimeout(function () { oitBox.style.display = "flex"; }, 411);
    setTimeout(function () { oitBox.classList.toggle("show"); }, 450);
}
function goQuestion10() {
    if (Q9resp1.checked || Q9resp2.checked || Q9resp3.checked || Q9resp4.checked) {
        li_Q9.classList.add("answered");
    }

    nonBox.classList.toggle('show');
    setTimeout(function () { nonBox.style.display = "none"; }, 410);
    setTimeout(function () { decBox.style.display = "flex"; }, 411);
    setTimeout(function () { decBox.classList.toggle("show"); }, 450);
}
function backQuestion9() {
    if (Q10resp1.checked || Q10resp2.checked || Q10resp3.checked || Q10resp4.checked) {
        li_Q10.classList.add("answered");
    }

    decBox.classList.toggle('show');
    setTimeout(function () { decBox.style.display = "none"; }, 410);
    setTimeout(function () { nonBox.style.display = "flex"; }, 411);
    setTimeout(function () { nonBox.classList.toggle("show"); }, 450);
}
function goQuestion11() {
    if (Q10resp1.checked || Q10resp2.checked || Q10resp3.checked || Q10resp4.checked) {
        li_Q10.classList.add("answered");
    }

    decBox.classList.toggle('show');
    setTimeout(function () { decBox.style.display = "none"; }, 410);
    setTimeout(function () { decPBox.style.display = "flex"; }, 411);
    setTimeout(function () { decPBox.classList.toggle("show"); }, 450);
}
function backQuestion10() {
    if (Q11resp1.checked || Q11resp2.checked || Q11resp3.checked || Q11resp4.checked) {
        li_Q11.classList.add("answered");
    }

    decPBox.classList.toggle('show');
    setTimeout(function () { decPBox.style.display = "none"; }, 410);
    setTimeout(function () { decBox.style.display = "flex"; }, 411);
    setTimeout(function () { decBox.classList.toggle("show"); }, 450);
}
function goQuestion12() {
    if (Q11resp1.checked || Q11resp2.checked || Q11resp3.checked || Q11resp4.checked) {
        li_Q11.classList.add("answered");
    }

    decPBox.classList.toggle('show');
    setTimeout(function () { decPBox.style.display = "none"; }, 410);
    setTimeout(function () { decSBox.style.display = "flex"; }, 411);
    setTimeout(function () { decSBox.classList.toggle("show"); }, 450);
}
function backQuestion11() {
    if (Q12resp1.checked || Q12resp2.checked || Q12resp3.checked || Q12resp4.checked) {
        li_Q12.classList.add("answered");
    }

    decSBox.classList.toggle('show');
    setTimeout(function () { decSBox.style.display = "none"; }, 410);
    setTimeout(function () { decPBox.style.display = "flex"; }, 411);
    setTimeout(function () { decPBox.classList.toggle("show"); }, 450);
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
            console.log(answerUser);
            console.log(status);
            console.log(time);
            console.log(fkQuiz);
            console.log(fkQuestion);
            console.log(fkUser);
            console.log(`Alguma variável está nula`);
            return false;
        } else {
            console.log(answerUser);
            console.log(status);
            console.log(time);
            console.log(fkQuiz);
            console.log(fkQuestion);
            console.log(fkUser);

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