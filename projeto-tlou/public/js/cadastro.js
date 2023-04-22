const theme = document.getElementById("btn_mode")
    , card = document.getElementById("div_card")
    , signUp = document.getElementById("btn_signUp")
    , signUp_google = document.getElementById("btn_signUp_google")
    , sessao = document.getElementById("right_page")
    , input_username = document.getElementById("input_username")
    , input_email = document.getElementById("input_email")
    , input_password = document.getElementById("input_password")
    , input_confirm_password = document.getElementById("input_confirm_password")
    , light = document.getElementById("light")
    , arrow_back = document.getElementById("arrow_back");

let i = 0;

theme.onclick = function () {
    if (i == 0) {
        type_mode.innerText = `Light mode`;
        changeAlt();
        i += 1;
    }
    else {
        type_mode.innerText = `Dark Mode`
        changeDefault();
        i = 0;
    }
}

function changeAlt() {
    light.setAttribute("src", "./assets/img/icons/light-white.png");
    arrow_back.setAttribute("src", "./assets/img/icons/arrow-back-white.png");
}

function changeDefault() {
    light.setAttribute("src", "./assets/img/icons/light.png");
    arrow_back.setAttribute("src", "./assets/img/icons/arrow-back.png")
}


const changeTheme = () => {
    sessao.classList.toggle("ativo");
    card.classList.toggle("ativo");
    input_username.classList.toggle("ativo");
    input_email.classList.toggle("ativo");
    input_password.classList.toggle("ativo");
    input_confirm_password.classList.toggle("ativo");
    signUp.classList.toggle("ativo");
    signUp_google.classList.toggle("ativo");
}

theme.addEventListener('click', changeTheme);