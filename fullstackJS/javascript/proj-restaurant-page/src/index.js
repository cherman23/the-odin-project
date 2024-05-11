
import home from './pages/home';

const homeButton = document.getElementsByClassName("Home")[0];
const mainDiv = document.getElementById("content");

homeButton.addEventListener("click", () => {
    mainDiv.appendChild(home());
})