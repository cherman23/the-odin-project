import './home.css'

function home() {

    const div = document.createElement("div")
    const title = document.createElement("h1");
    const p = document.createElement("p");

    title.textContent = "Carters Chocolatiers";
    p.textContent = "Carters Chocolatiers sources cocoa from all across the world. \n Come in to one of our many locations or order online."

    div.appendChild(title)
    div.appendChild(p);
    // Placeholder, Delete later
    div.style.backgroundImage = "url('https://picsum.photos/750/500')";

    return div;
}

export default home;