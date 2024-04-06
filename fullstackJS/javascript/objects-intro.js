const myObject = {
    property: "value",
    otherProperty: 77
};

function person(name, age){
    this.name = name;
    this.age = age;
}

const jake = new person("JAKE", 17);
function book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        console.log(title + " by " + author + "has " + String(pages) + " and is " + read);
    };
};

const Hobbit = new book("Hobbit", "JRR", 123, "read");
Hobbit.info();