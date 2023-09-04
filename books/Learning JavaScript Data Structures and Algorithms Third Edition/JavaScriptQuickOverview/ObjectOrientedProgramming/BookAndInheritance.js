class Book {
  constructor(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
  }

  printIsgn() {
    console.log(this.isbn);
  }
}

// inheritance
class ITBook extends Book {
  constructor(title, pages, isbn, technology) {
    super(title, pages, isbn);
    this.technology = technology;
  }

  printTechnology() {
    return this.technology;
  }
}

const book = new Book("title", "pag", "isbn");
console.log(book.title);
book.title = "new title";
console.log(book.title);

const jsBook = new ITBook(
  "Learning JS Algorithms",
  "200",
  "1234567890",
  "JavaScript"
);
console.log(jsBook.title);
console.log(jsBook.printTechnology());
