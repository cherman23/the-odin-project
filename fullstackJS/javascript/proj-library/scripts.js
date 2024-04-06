const myLibary = [];
submissionButton = document.getElementById("book-submit");
addBookButton = document.getElementById("new-book-button");
formDiv = document.getElementsByClassName("form-container")[0];
cardContainer = document.getElementsByClassName("card-container")[0];
entryForm = document.querySelector("form");

function Book(name, author, pages){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.info = function(){
        return [name, author, pages];
    };
}

function addBookToLibrary(book){
    myLibary.push(book);
}

submissionButton.addEventListener("click", (e) => {
    e.preventDefault();
    bookData = [];
    const formData = new FormData(entryForm);
    for (const value of formData){
        bookData.push(value[1]);
    }
    if (bookData.length == 3) {
        const newBook = new Book(bookData[0], bookData[1], bookData[2]);
        formDiv.style.display = "none";
        addBookToLibrary(newBook);
        createBookCard(newBook);
    }
    else {
        alert("Please fill out all form data");
    }
});

function createBookCard(book) {
    const bookCard = document.createElement('div');
    const titleText = document.createElement("h4");
    const authorText = document.createElement("h4");
    const pagesText = document.createElement("h4");
    const delButton = document.createElement("button");
    bookCard.classList.add("card");
    delButton.classList.add("delete-book");
    titleText.textContent = book.name;
    authorText.textContent = book.author;
    pagesText.textContent = book.pages;
    delButton.textContent = "Remove";
    bookCard.appendChild(titleText);
    bookCard.appendChild(authorText);
    bookCard.appendChild(pagesText);
    bookCard.appendChild(delButton);
    cardContainer.appendChild(bookCard);
}

addBookButton.addEventListener("click", () => {
    formDiv.style.display = "flex";
});
