const myLibary = [];
submissionButton = document.querySelector("button");
entryForm = document.querySelector("form");
bookTable = document.querySelector("tbody");

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
    const newBook = new Book(bookData[0], bookData[1], bookData[2]);
    addBookToLibrary(newBook);
    addBookToTable(newBook);
});

function addBookToTable(book) {
    const newRow = document.createElement("tr");
    newRow.classList.add("table-row")
    bookInfo = book.info();
    for (var i = 0; i < bookInfo.length; i++){
        const newColumn = document.createElement("td");
        newColumn.textContent = bookInfo[i];
        newRow.appendChild(newColumn);
    }
    bookTable.appendChild(newRow);
}