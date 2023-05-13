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
    , qCardContainer = document.getElementById("qCard_container")
    , imgLike = document.getElementById("imgLike");

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
    light.setAttribute("src", "../assets/img/icons/light-white.png");
    userImg.setAttribute("src", "../assets/img/icons/User-white.png");
    trophyImg.setAttribute("src", "../assets/img/icons/Trophy-white.png");
    heartImg.setAttribute("src", "../assets/img/icons/Heart-white.png");
    input.style.backgroundImage = "url('../assets/img/icons/Search-white.png')";
    imgLike.setAttribute("src", "../assets/img/icons/Heart-white.png");
}

function changeDefault() {
    light.setAttribute("src", "../assets/img/icons/light.png");
    userImg.setAttribute("src", "../assets/img/icons/User.png");
    trophyImg.setAttribute("src", "../assets/img/icons/icon-trofeu.png");
    heartImg.setAttribute("src", "../assets/img/icons/Heart.png");
    input.style.backgroundImage = "url('../assets/img/icons/icon-search.png')";
    imgLike.setAttribute("src", "../assets/img/icons/Heart.png");
}

function changeTheme() {
    globalContainer.classList.toggle("ativo");
    navbar.classList.toggle("ativo");
    typeMode.classList.toggle("ativo");
    input.classList.toggle("ativo");
    divTable.classList.toggle("ativo");
    qCardContainer.classList.toggle("ativo");

    for (var i = 0; i < liBlock.length; i++) {
        liBlock[i].classList.toggle("ativo")
    }
    for (var i = 0; i < divBigChart.length; i++) {
        divBigChart[i].classList.toggle("ativo")
    }
    for (var i = 0; i < divMediumChart.length; i++) {
        divMediumChart[i].classList.toggle("ativo")
    }
}

const btnMenu = document.getElementById("btn_menu");

// Expansão de elementos (Dashboard, seleção de quiz)
const navbar = document.getElementById("nav")
    , navlist = document.getElementById("nav_list")
    , section = document.getElementById("section_content");

function navExpand() {
    navbar.classList.toggle("expand");
    navlist.classList.toggle("expand");
    section.classList.toggle("expand");
}

btnMenu.addEventListener('click', navExpand);
theme.addEventListener('click', changeTheme);