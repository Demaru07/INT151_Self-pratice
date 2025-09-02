function echo1(value) {
    return value
}
function getLength1(str) {
    return str.length
}
const TAX = 0.07
let x = 1

class Book {
    constructor(isbn, title) {
        this.isbn = isbn
        this.title = title
    }
}

export { echo1, getLength1 as default, TAX as VAT, Book }