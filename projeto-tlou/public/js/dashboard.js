// Daytime message
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

// Dark mode
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
    qCardContainer.classList.toggle("ativo");

    light.setAttribute("src", "../assets/img/icons/light-white.png");
    userImg.setAttribute("src", "../assets/img/icons/User-white.png");
    trophyImg.setAttribute("src", "../assets/img/icons/Trophy-white.png");
    heartImg.setAttribute("src", "../assets/img/icons/Heart-white.png");
    input.style.backgroundImage = "url('../assets/img/icons/Search-white.png')";
    imgLike.setAttribute("src", "../assets/img/icons/Heart-white.png");

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

function undoChangeThemeInside() {
    type_mode.innerText = `Dark Mode`;
    globalContainer.classList.toggle("ativo");
    navbar.classList.toggle("ativo");
    typeMode.classList.toggle("ativo");
    input.classList.toggle("ativo");
    divTable.classList.toggle("ativo");
    qCardContainer.classList.toggle("ativo");

    light.setAttribute("src", "../assets/img/icons/light.png");
    userImg.setAttribute("src", "../assets/img/icons/User.png");
    trophyImg.setAttribute("src", "../assets/img/icons/icon-trofeu.png");
    heartImg.setAttribute("src", "../assets/img/icons/Heart.png");
    input.style.backgroundImage = "url('../assets/img/icons/icon-search.png')";
    imgLike.setAttribute("src", "../assets/img/icons/Heart.png");

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

let darkModeInside = localStorage.getItem("modo");

if (darkModeInside === "true") {
    changeThemeInside(); // set state of darkMode on page load
}
theme.addEventListener("click", (e) => {
    darkModeInside = localStorage.getItem("modo"); // update darkMode when clicked
    if (darkModeInside === "false") {
        changeThemeInside();
        localStorage.setItem("modo", "true");
        console.log('Dark Mode Ligado');
    } else {
        undoChangeThemeInside();
        localStorage.setItem("modo", "false");
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

aDash.addEventListener('click', changePage);
aQSelec.addEventListener('click', changePage);