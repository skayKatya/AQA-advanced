import { Book } from "./book.js"

class EBook extends Book{
    constructor(name, author, year, format){
        super(name, author, year);
        this._format = format
    }

    static testEBook (eBook, fileExpention) {
        return new EBook(eBook._name, eBook._author, eBook._year, eBook._format, fileExpention);
    }

}

let eBook = new EBook('Cypress2', 'H3', '2023', 'txt')
let fileExpention = 'txt'

console.log(EBook.testEBook(eBook, fileExpention))

