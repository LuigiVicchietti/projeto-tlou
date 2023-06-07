document.addEventListener('DOMContentLoaded', () => {
    fetch('/quiz/listar', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    }).then((resposta) => {
        if (resposta.ok) {
            resposta.json().then((jsonQuizCard) => {
                jsonQuizCard.forEach(card => {
                    document.getElementById('content_qSelector').innerHTML += `
                    <div class="qCard_container">
                    <div class="qCard select-disable">
                        <img class="img-quiz" src="${card.foto}" alt="imagem do quiz">
                        <div class="quiz-describe">
                            <h2 id="name_quiz">${card.quizNome}</h2>
                            <p>${card.descricao}</p>
                        </div>
                        <div class="qCard-actions">
                            <a href="./quiz1.html"><button>Responder</button></a>
                            <div style="display: flex; justify-content: center; align-items: center; font-size: 18px;">
                                <span id="qtdCurtida${card.idQuiz}">0</span>
                                <span id="btn_curtida${card.idQuiz}">
                                    
                                </span>
                            </div>
                        </div>
                    </div>
                    `
                });
                document.getElementById(`content_qSelector`).innerHTML += `
                <div class="qCard-empty select-disable">
                        <img class="soon-warning" src="../assets/img/icons/soon-alert-icon.png" alt="Em breve">
                        <div class="soon-describe">
                            <h3>EM BREVE!</h3>
                            <p>No momento não há mais quizes para responder. Fique atento a novas atualizações, quem
                                sabe um
                                novo quiz é feito, não é mesmo?!</p>
                        </div>
                    </div>
                </div>
                `
            }).then(() => {
                gerarBtn();
            });
        } else {
            console.log('Erro no .THEN');
        }
    })
})

const dayTime = document.getElementById("daytime");
let date = new Date();
let hour = date.getHours();

if (hour >= 6 && hour < 11) {
    dayTime.innerText = `morning`;
} else {
    if (hour >= 12 && hour <= 19) {
        dayTime.innerText = `afternoon`;
    } else {
        dayTime.innerText = `evening`;
    }
}

const theme = document.getElementById("btn_mode")
    , globalContainer = document.getElementById("global_container")
    , input = document.getElementById("input_search")
    , typeMode = document.getElementById("type_mode")
    , light = document.getElementById("light")
    , userImg = document.getElementById("user_img")
    , trophyImg = document.getElementById("trophy_img")
    , heartImg = document.getElementById("heart_img")
    , liBlock = document.getElementsByName("info_block")
    , divTable = document.getElementById("div_table")
    , divBigChart = document.getElementsByClassName("div-big-chart")
    , divMediumChart = document.getElementsByName("div_medium_chart")
    , imgLike = document.getElementById("imgLike")
    , navbar = document.getElementById("nav")
    , navlist = document.getElementById("nav_list")
    , section = document.getElementById("section_content");

function changeThemeInside() {
    type_mode.innerText = `Light mode`;
    globalContainer.classList.toggle("ativo");
    navbar.classList.toggle("ativo");
    typeMode.classList.toggle("ativo");
    input.classList.toggle("ativo");
    divTable.classList.toggle("ativo");

    light.setAttribute("src", "../assets/img/icons/light-white.png");
    userImg.setAttribute("src", "../assets/img/icons/User-white.png");
    trophyImg.setAttribute("src", "../assets/img/icons/Trophy-white.png");
    heartImg.setAttribute("src", "../assets/img/icons/Heart-white.png");
    input.style.backgroundImage = "url('../assets/img/icons/Search-white.png')";

    for (var i = 0; i < liBlock.length; i++) {
        liBlock[i].classList.toggle("ativo")
    }
    for (var i = 0; i < divBigChart.length; i++) {
        divBigChart[i].classList.toggle("ativo")
    }
    for (var i = 0; i < divMediumChart.length; i++) {
        divMediumChart[i].classList.toggle("ativo")
    }
    setTimeout(function () {
        for (var i = 0; i < document.querySelectorAll(`.qCard_container`).length; i++) {
            document.querySelectorAll(`.qCard_container`)[i].classList.toggle("ativo");
        }
    }, 400)
}

function undoChangeThemeInside() {
    type_mode.innerText = `Dark Mode`;
    globalContainer.classList.toggle("ativo");
    navbar.classList.toggle("ativo");
    typeMode.classList.toggle("ativo");
    input.classList.toggle("ativo");
    divTable.classList.toggle("ativo");

    light.setAttribute("src", "../assets/img/icons/light.png");
    userImg.setAttribute("src", "../assets/img/icons/User.png");
    trophyImg.setAttribute("src", "../assets/img/icons/icon-trofeu.png");
    heartImg.setAttribute("src", "../assets/img/icons/Heart.png");
    input.style.backgroundImage = "url('../assets/img/icons/icon-search.png')";

    for (var i = 0; i < liBlock.length; i++) {
        liBlock[i].classList.toggle("ativo")
    }
    for (var i = 0; i < divBigChart.length; i++) {
        divBigChart[i].classList.toggle("ativo")
    }
    for (var i = 0; i < divMediumChart.length; i++) {
        divMediumChart[i].classList.toggle("ativo")
    }
    setTimeout(function () {
        for (var i = 0; i < document.querySelectorAll(`.qCard_container`).length; i++) {
            document.querySelectorAll(`.qCard_container`)[i].classList.toggle("ativo");
        }
    }, 100)
}

if (localStorage.modo === "true") {
    changeThemeInside();
}

theme.addEventListener("click", (e) => {
    if (localStorage.modo == "false") {
        changeThemeInside();
        console.log('Dark Mode Ligado');
    } else if (localStorage.modo === undefined) {
        changeThemeInside();
        console.log('Dark Mode Ligado');
    } else {
        undoChangeThemeInside();
        console.log('Dark Mode Desligado');
    }
});

// Expansão de elementos (Dashboard, seleção de quiz)
const btnMenu = document.getElementById("btn_menu");

function navExpand() {
    navbar.classList.toggle("expand");
    navlist.classList.toggle("expand");
    section.classList.toggle("expand");
}

btnMenu.addEventListener('click', navExpand);

// Change page (Dash to Quiz Selector)
const dashLi = document.getElementById("dash_li")
    , qSelecLi = document.getElementById("qSelec_li")
    , aDash = document.getElementById("a_dash")
    , aQSelec = document.getElementById("a_qSelec")
    , contentDash = document.getElementById("content")
    , contentQSelec = document.getElementById("content_qSelector");

let i = 0;

function changePage() {
    if (i == 1) {
        qSelecLi.classList.remove("now");
        contentQSelec.classList.toggle("show");
        setTimeout(function () { contentQSelec.style.display = "none"; }, 210);
        setTimeout(function () { contentDash.style.display = "flex"; }, 211);
        setTimeout(function () { contentDash.classList.toggle("hide"); }, 250);
        qSelecLi.style.pointerEvents = "auto";
        dashLi.style.pointerEvents = "none";
        dashLi.classList.add("now");
        i--
    } else {
        dashLi.classList.remove("now");
        contentDash.classList.toggle("hide");
        setTimeout(function () { contentDash.style.display = "none"; }, 210);
        setTimeout(function () { contentQSelec.style.display = "flex"; }, 211);
        setTimeout(function () { contentQSelec.classList.toggle("show"); }, 250);
        dashLi.style.pointerEvents = "auto";
        qSelecLi.style.pointerEvents = "none";
        qSelecLi.classList.add("now");
        i++
    }
}

document.addEventListener('DOMContentLoaded', () => {
    fetch('/usuarios/exibirRankDash', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    }).then((resposta) => {
        if (resposta.ok) {
            resposta.json().then((jsonRankDash) => {
                let position = 1;
                jsonRankDash.forEach(row => {
                    document.getElementById('tbody_content').innerHTML += `
                    <tr>
                        <td>${position}°</td>
                        <td>${row.NomeUser}</td>
                        <td>${row.Pontuacao}</td>
                    </tr>
                    `
                    position++
                });
            })
        } else {
            console.log('Erro no .THEN');
        }
    })
})

document.addEventListener('DOMContentLoaded', () => {
    fetch('/usuarios/exibirUser', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    }).then((resposta) => {
        if (resposta.ok) {
            resposta.json().then((jsonQtdUser) => {
                document.getElementById('qtd_user').innerText = `${jsonQtdUser[0].idUser}`
            })
        } else {
            console.log('Erro no .THEN');
        }
    })
})

document.addEventListener('DOMContentLoaded', () => {
    fetch('/usuarios/whoGabaritou', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    }).then((resposta) => {
        if (resposta.ok) {
            resposta.json().then((jsonWhoGabaritou) => {
                document.getElementById('qtd_quiz_gab').innerText = `${jsonWhoGabaritou[0].QtdGabaritou}`
            })
        } else {
            console.log('Erro no .THEN');
        }
    })
})

document.addEventListener('DOMContentLoaded', () => {
    fetch('/quiz_like/likeByQuiz', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    }).then((resposta) => {
        if (resposta.ok) {
            resposta.json().then((jsonLikeAllQuiz) => {
                document.getElementById('like_all_quiz').innerText = `${jsonLikeAllQuiz[0].qtdTotalLike}`
            })
        } else {
            console.log('Erro no .THEN');
        }
    })
})

document.addEventListener('DOMContentLoaded', function () {
    fetch('/quiz_like/likeByQuizId', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    }).then((resposta) => {
        if (resposta.ok) {
            resposta.json().then((jsonLikeQuiz) => {
                jsonLikeQuiz.forEach(cardLike => {
                    let spaceLike = document.getElementById(`qtdCurtida${cardLike.idQuiz}`);
                    spaceLike.innerText = `${cardLike.quizLikes}`
                })
            })
        } else {
            console.log('Erro no .THEN');
        }
    })
})

async function gerarBtn() {
    await fetch(`/quiz_like/showQuizUserLike/${sessionStorage.ID_USUARIO}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    }).then((resposta) => {
        if (resposta.ok) {
            resposta.json().then((jsonShowQuizUserLike) => {
                jsonShowQuizUserLike.forEach(row => {
                    let btn_box = document.getElementById(`btn_curtida${row.idquiz}`);
                    if (row.liked == 0) {
                        btn_box.innerHTML = `
                            <button referenceQuiz='${row.idquiz}' class="btn" onclick="likeQuiz(this)">
                                <svg class="icon" width="25" height="25" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                    d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" fill="#fd1853">
                                    </path>
                                </svg>
                            </button>
                        `
                    } else {
                        btn_box.innerHTML = `
                            <button referenceQuiz='${row.idquiz}' class="btn liked" onclick="likeQuiz(this)">
                                <svg class="icon" width="25" height="25" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                    <path
                                    d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" fill="#fd1853">
                                    </path>
                                </svg>
                            </button>
                        `
                    }
                })
            })
        } else {
            console.log('Erro no .THEN');
        }
    })
}

aDash.addEventListener('click', changePage);
aQSelec.addEventListener('click', changePage);