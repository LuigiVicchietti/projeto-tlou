import { changeThemeCad, undoChangeThemeCad } from "./funcoes.js";

const theme = document.getElementById("btn_mode");

if (localStorage.modo == "true") {
    changeThemeCad();
}

theme.addEventListener("click", (e) => {
    if (localStorage.modo == "false") {
        changeThemeCad();
        console.log('Dark Mode Ligado');
    } else if (localStorage.modo === undefined) {
        changeThemeCad();
        console.log('Dark Mode Ligado');
    } else {
        undoChangeThemeCad();
        console.log('Dark Mode Desligado');
    }
});