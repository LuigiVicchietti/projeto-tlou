import { changeThemeLog, undoChangeThemeLog } from "./funcoes.js";

const theme = document.getElementById("btn_mode");

let darkModeLog = localStorage.getItem("modo");

if (darkModeLog === "true") {
    changeThemeLog(); // set state of darkMode on page load
}
theme.addEventListener("click", (e) => {
    darkModeLog = localStorage.getItem("modo"); // update darkMode when clicked
    if (darkModeLog === "false") {
        changeThemeLog();
        localStorage.setItem("modo", "true");
        console.log('Dark Mode Ligado');
    } else {
        undoChangeThemeLog();
        localStorage.setItem("modo", "false");
        console.log('Dark Mode Desligado');
    }
});