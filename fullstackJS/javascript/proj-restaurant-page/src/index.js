import './styles.css'
import home from './pages/home';
import removeAll from './pages/utils.js';

const homeButton = document.getElementsByClassName("Home")[0];
const contentDiv = document.getElementById("content");

homeButton.addEventListener("click", () => {
    removeAll();
    contentDiv.appendChild(home());
})