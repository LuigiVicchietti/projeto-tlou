const navbar = document.getElementById("navbar");

const ativarScroll = () => {
    navbar.classList.toggle("alt", scrollY > 0);
}

var musics = [`./assets/audios/TheLastOfUs-themeSong.mp3`, `./assets/audios/theLastOfUs-part2-themeSong.mp3`, `./assets/audios/allGoneAftermatch.mp3`,
    `./assets/audios/thePathNewBeggining.mp3`, `./assets/audios/grieving.mp3`, `./assets/audios/allowedToBeHappy.mp3`, `./assets/audios/throughTheValley.mp3`]

function playMusic() {
    let  flexibleSpan = document.getElementById(`flexible_span`);

    let numRandom = parseInt(Math.random() * musics.length);
    console.log(numRandom)
    let audio = document.querySelector(`audio`);

    audio.setAttribute(`src`, `${musics[numRandom]}`)
    flexibleSpan.classList.add(`clicked`);
    setTimeout(() => { flexibleSpan.style.display = `none` }, 501);
    setTimeout(() => { document.querySelector(`.loader`).style.display = `flex` }, 502);
    setTimeout(() => { document.querySelector(`.loader`).classList.add (`show`) }, 505);
    audio.play();
}

window.addEventListener('scroll', ativarScroll);