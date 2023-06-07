export { validarSessao, limparSessao, changeThemeCad, undoChangeThemeCad, changeThemeLog, undoChangeThemeLog };

// sessão
function validarSessao() {

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var b_usuario = document.getElementById("b_usuario");

    if (email != null && nome != null) {
        b_usuario.innerHTML = nome;

    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}

// Dark Mode - Telas de login e cadastro
const card = document.getElementById("div_card")
    , light = document.getElementById("light")
    , arrow_back = document.getElementById("arrow_back");

//Login
const signIn = document.getElementById("btn_signIn")
    , signUp = document.getElementById("btn_signUp")
    , signUp_google = document.getElementById("btn_signUp_google")
    , sessao = document.getElementById("right_page")
    , input_email = document.getElementById("input_email")
    , input_password = document.getElementById("input_password")
    , check = document.getElementById("remember");

function changeThemeLog() {
    light.setAttribute("src", "./assets/img/icons/light-white.png");
    arrow_back.setAttribute("src", "./assets/img/icons/arrow-back-white.png");

    type_mode.innerText = `Light mode`;
    sessao.classList.toggle("ativo");
    card.classList.toggle("ativo");
    input_email.classList.toggle("ativo");
    input_password.classList.toggle("ativo");
    check.classList.toggle("ativo");
    signIn.classList.toggle("ativo");
    signUp.classList.toggle("ativo");
    signUp_google.classList.toggle("ativo");

    localStorage.setItem("modo", "true");
}

function undoChangeThemeLog() {
    light.setAttribute("src", "./assets/img/icons/light.png");
    arrow_back.setAttribute("src", "./assets/img/icons/arrow-back.png");

    type_mode.innerText = `Dark Mode`;
    sessao.classList.toggle("ativo");
    card.classList.toggle("ativo");
    input_email.classList.toggle("ativo");
    input_password.classList.toggle("ativo");
    check.classList.toggle("ativo");
    signIn.classList.toggle("ativo");
    signUp.classList.toggle("ativo");
    signUp_google.classList.toggle("ativo");

    localStorage.setItem("modo", "false");
}

// Cadastro
const input_username = document.getElementById("input_username")
    , input_confirm_password = document.getElementById("input_confirm_password");

function changeThemeCad() {
    light.setAttribute("src", "./assets/img/icons/light-white.png");
    arrow_back.setAttribute("src", "./assets/img/icons/arrow-back-white.png");

    type_mode.innerText = `Light mode`;
    sessao.classList.toggle("ativo");
    card.classList.toggle("ativo");
    input_username.classList.toggle("ativo");
    input_email.classList.toggle("ativo");
    input_password.classList.toggle("ativo");
    input_confirm_password.classList.toggle("ativo");
    signUp.classList.toggle("ativo");
    signUp_google.classList.toggle("ativo");

    localStorage.setItem("modo", "true");
}

function undoChangeThemeCad() {
    light.setAttribute("src", "./assets/img/icons/light.png");
    arrow_back.setAttribute("src", "./assets/img/icons/arrow-back.png");

    type_mode.innerText = `Dark Mode`;
    sessao.classList.toggle("ativo");
    card.classList.toggle("ativo");
    input_username.classList.toggle("ativo");
    input_email.classList.toggle("ativo");
    input_password.classList.toggle("ativo");
    input_confirm_password.classList.toggle("ativo");
    signUp.classList.toggle("ativo");
    signUp_google.classList.toggle("ativo");

    localStorage.setItem("modo", "false");
}