export class Book {
    constructor (name, author, year){
        this._name = name
        this._author = author,
        this._year = year
    }
    
    printInfo(){
        return this
    }

    // get printInfo() {
    //     return this
    // }

    // set newName(name){
    //     if (typeof name !== 'string') {
    //         console.log('Name should be a string')
    //         return
    //     }
    //     this._name = name
    // }

    // set newAuthor(author){
    //     if (typeof author !== 'string') {
    //         console.log('Author should be a string')
    //         return
    //     }
    //     this._author = author
    // }
    // set newYear(year){
    //     if (typeof year !== 'number') {
    //         console.log('Year should be a number')
    //         return
    //     }
    //     this._year = year
    // }
    }


let book1 = new Book('Cypress', 'H', '2024')
let book2 = new Book('JS', 'Y', '2024')
let book3 = new Book('Playwrite', 'J', '2024')

1.1
console.log(book1.printInfo())
console.log(book2.printInfo())
console.log(book3.printInfo())
