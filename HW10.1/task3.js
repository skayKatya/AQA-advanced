export class Book {
	constructor(name, author, year) {
		this._name = name;
		(this._author = author), (this._year = year);
	}

	get printInfo() {
		return this;
	}

	set newName(name) {
		if (typeof name !== 'string') {
			console.log('Name should be a string');
			return;
		}
		this._name = name;
	}

	set newAuthor(author) {
		if (typeof author !== 'string') {
			console.log('Author should be a string');
			return;
		}
		this._author = author;
	}
	set newYear(year) {
		if (typeof year !== 'number') {
			console.log('Year should be a number');
			return;
		}
		this._year = year;
	}
}

let book1 = new Book('Cypress', 'H', '2024');


//1.3
console.log(book1.printInfo);

book1.newName = 'JavaScript';
book1.newAuthor = 'S';
book1.newYear = 2020;
console.log(book1.printInfo);

book1.newName = 5;
book1.newAuthor = 7;
book1.newYear = '2020';
console.log(book1.printInfo);
