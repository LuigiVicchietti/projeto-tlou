import { changeThemeCad, undoChangeThemeCad } from "./funcoes.js";

const theme = document.getElementById("btn_mode");

let darkModeCad = localStorage.getItem("modo");

if (darkModeCad === "true") {
    changeThemeCad(); // set state of darkMode on page load
}
theme.addEventListener("click", (e) => {
    darkModeCad = localStorage.getItem("modo"); // update darkMode when clicked
    if (darkModeCad === "false") {
        changeThemeCad();
        localStorage.setItem("modo", "true");
        console.log('Dark Mode Ligado');
    } else {
        undoChangeThemeCad();
        localStorage.setItem("modo", "false");
        console.log('Dark Mode Desligado');
    }
});