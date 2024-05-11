import './styles.css'
import home from './pages/home';
import removeAll from './pages/utils.js';
import aboutPage from './pages/about.js';

const homeBtn = document.getElementsByClassName("Home")[0];
const aboutBtn = document.getElementsByClassName("About")[0];
const contentDiv = document.getElementById("content");

homeBtn.addEventListener("click", () => {
    removeAll();
    let pageElement = home();
    pageElement.id = "pageContent";
    contentDiv.appendChild(pageElement);
})

aboutBtn.addEventListener("click", () => {
    removeAll()
    let pageElement = aboutPage();
    pageElement.id = "pageContent";
    contentDiv.appendChild(pageElement);
})