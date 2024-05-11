import "./about.css";

function aboutPage() {
    const aboutDiv = document.createElement("div");
    let p = document.createElement("p");
    let contactInfo = document.createElement("pre")

    p.textContent = "Carters Chocolatiers was founded in 1857. The family business has been continued ever since right in the heart of new york city."
    contactInfo.textContent = 
        `
        Address: 123 Chestnut Ave, New York, New York
        Phone: (201) 555-3343
        `;

    aboutDiv.appendChild(p);
    aboutDiv.appendChild(contactInfo);

    return aboutDiv;
}

export default aboutPage;