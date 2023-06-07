const navbar = document.getElementById("navbar");
const notinhaImg = document.getElementById('notinha');

const ativarScroll = () => {
    navbar.classList.toggle("alt", scrollY > 0);
}

var musics = [`./assets/audios/TheLastOfUs-themeSong.mp3`, `./assets/audios/theLastOfUs-part2-themeSong.mp3`, `./assets/audios/allGoneAftermatch.mp3`,
    `./assets/audios/thePathNewBeggining.mp3`, `./assets/audios/grieving.mp3`, `./assets/audios/allowedToBeHappy.mp3`, `./assets/audios/throughTheValley.mp3`]

let audio = document.querySelector(`audio`);
let flexibleSpan = document.getElementById(`flexible_span`);

function playMusic() {
    let numRandom = parseInt(Math.random() * musics.length);

    audio.setAttribute(`src`, `${musics[numRandom]}`)

    flexibleSpan.classList.toggle(`clicked`);
    setTimeout(() => { flexibleSpan.style.display = `none` }, 501);
    setTimeout(() => { document.querySelector(`.loader`).style.display = `flex` }, 502);
    setTimeout(() => { document.querySelector(`.loader`).classList.add(`show`) }, 505);
    audio.play();

    notinhaImg.setAttribute('onclick', 'pauseMusic()');
}

function pauseMusic() {
    audio.pause();

    // flexibleSpan.innerHTML = `Toque para retomar a música!`;
    document.querySelector(`.loader`).classList.remove(`show`);
    setTimeout(() => { document.querySelector(`.loader`).style.display = `none` }, 501);
    setTimeout(() => { flexibleSpan.style.display = `flex` }, 502);
    setTimeout(() => { flexibleSpan.classList.toggle(`cliked`) }, 505);

    notinhaImg.setAttribute('onclick', 'playMusic()');
}

window.addEventListener('scroll', ativarScroll);