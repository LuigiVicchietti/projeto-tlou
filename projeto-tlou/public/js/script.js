const // navItens = document.querySelectorAll(".nav-item"),
    // titleNavbar = document.getElementById("title-navbar"),
    // firefly = document.getElementById("firefly-navbar"),
        navbar = document.getElementById("navbar");

const ativarScroll = () => {
    navbar.classList.toggle("alt", scrollY > 0);

    // navItens.forEach(e => {
    //     e.classList.toggle("alt", scrollY > 0);
    // })

    // if (scrollY === 0) {
    //     firefly.setAttribute("src", "https://static.tvtropes.org/pmwiki/pub/images/fireflies.png")
    //     titleNavbar.setAttribute("src", "https://gamerview.uai.com.br/wp-content/uploads/2020/06/the-last-of-us-part-2-logo.png")
    // } else {
    //     firefly.setAttribute("src", "https://i.pinimg.com/originals/7b/06/34/7b0634d5c9a609b047e9cdb3ac0668c4.png")
    //     titleNavbar.setAttribute("src", "https://imagensemoldes.com.br/wp-content/uploads/2021/06/Logo-The-Last-of-Us-PNG.png")
    // }
}

window.addEventListener('scroll', ativarScroll);