class Book {
    constructor(public readonly title: string, public readonly author: string) {
        this.title = title;
        this.author = author;
    }
}

const book = new Book("1984", "George Orwell");
console.log(`${book.title} by ${book.author}`);

// book.title = "Brave New World";
// book.author = "Terry Pratchet";
// console.log(`${book.title} by ${book.author}`); //above lines are highlighted in red, but do not actually prevent putting in a new value. Some tsconfig properties must be set to do this
