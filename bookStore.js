"use strict";
class Book {
    constructor(_title, _author, _price, _quantity) {
        this.title = _title;
        this.author = _author;
        this.price = _price;
        this.quantity = _quantity;
    }
}
const books = [
    new Book("Atomic Habits", "James Clear", 1260, 100),
    new Book("Pride and Prejudice", "Jane Austen", 830, 50),
    new Book("To Kill a Mockingbird", "Harper Lee", 1050, 75),
    new Book("The Lord of the Rings", "J.R.R. Tolkien", 1600, 66),
];
// const bookdatas:BookData[]=[
//     {title:"Atomic Habits",author:"James Clear",publicationYear:2018},
//     {title:"Pride and Prejudice",author:"Jane Austen",},
//     {title:"To Kill a Mockingbird",author:"Harper Lee",publicationYear:2011}
// ]
// const books:Book[]=bookdatas.map((bookdata)=>{
//     return 
//         new Book(bookdata.title,bookdata.author,1260,100),
// });
console.log("Array of Books:");
books.map(book => {
    console.log(`Title: ${book.title}, Author: ${book.author}, Price: $${book.price}, Quantity Available: ${book.quantity}`);
});
