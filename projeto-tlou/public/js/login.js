import { changeThemeLog, undoChangeThemeLog } from "./funcoes.js";

const theme = document.getElementById("btn_mode");

if (localStorage.modo == "true") {
    changeThemeLog();
}

theme.addEventListener("click", (e) => {
    if (localStorage.modo == "false") {
        changeThemeLog();
        console.log('Dark Mode Ligado');
    } else if (localStorage.modo === undefined) {
        changeThemeLog();
        console.log('Dark Mode Ligado');
    } else {
        undoChangeThemeLog();
        console.log('Dark Mode Desligado');
    }
});