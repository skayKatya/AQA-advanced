class Book {
	constructor(name, author, year) {
		this.name = name;
		(this.author = author), (this.year = year);
	}

	static printOldestBook(array) {
		return array.toSorted((a, b) => a.year - b.year);
	}
}

let book1 = new Book('Cypress', 'H', '2024');
let book2 = new Book('JS', 'Y', '2021');
let book3 = new Book('Playwrite', 'J', '2022');

const array = [book1, book2, book3];

console.log(Book.printOldestBook(array));
