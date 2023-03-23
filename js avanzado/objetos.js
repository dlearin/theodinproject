function Book(title, author,pages,read){

this.title = title;
this.author = author;
this.pages = pages;
this.read = read;

};

Book.prototype.info = function(){

        return string = this.title +" "+ this.author+ " "+ this.pages +" "+ this.read;
};

Book.prototype.prueba = "prueba";

const theHobbit = new Book('The Hobbit','by J.R.R. Tolkien','295 pages','not read yet');

console.log(theHobbit.info());
console.log(theHobbit.prueba)