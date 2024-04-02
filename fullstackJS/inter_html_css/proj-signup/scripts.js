let passwords = document.querySelectorAll('input[type=password]')
let submitButton = document.body.querySelector("button");

console.log(passwords)

submitButton.addEventListener("click", () => {
    if (!(passwords[0] == passwords[1])){
        alert("Passwords must equal eachother")
    }
})
