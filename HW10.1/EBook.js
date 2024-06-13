import { Book } from "./book.js"

class EBook extends Book{
    constructor(name, author, year, format){
        super(name, author, year);
        this._format = format
    }

    get printInfo() {
        return this
    }

    set newFormat(format){
        if (typeof format !== 'string') {
            console.log('Format should be a string')
            return
        }
        this._format = format
    }
}

let eBook = new EBook('Cypress2', 'H3', '2023', '2020')
console.log(eBook.printInfo)


eBook.newFormat = 1
console.log(eBook.printInfo)
