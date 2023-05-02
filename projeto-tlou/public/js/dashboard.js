const btnMenu = document.getElementById("btn_menu")
    , navbar = document.getElementById("nav")
    , navlist = document.getElementById("nav_list")
    , section = document.getElementById("section_content");

function navExpand() {
    navbar.classList.toggle("expand");
    navlist.classList.toggle("expand");
    section.classList.toggle("expand");
}

btnMenu.addEventListener('click', navExpand);