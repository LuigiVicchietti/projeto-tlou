import { changeThemeLog, undoChangeThemeLog } from "./funcoes.js";

const theme = document.getElementById("btn_mode");

let darkMode = localStorage.getItem("modo");

if (darkMode === "true") {
    changeThemeLog(); // set state of darkMode on page load
}
theme.addEventListener("click", (e) => {
    darkMode = localStorage.getItem("modo"); // update darkMode when clicked
    if (darkMode === "false") {
        changeThemeLog();
        localStorage.setItem("modo", "true");
        console.log('Dark Mode Ligado');
    } else {
        undoChangeThemeLog();
        localStorage.setItem("modo", "false");
        console.log('Dark Mode Desligado');
    }
});