// ฟังก์ชันธรรมดา export แบบปกติ
function echo1(value) {
    return value
}

// ฟังก์ชันหาความยาว string (จะ export เป็น default ด้วย)
function getLength1(str) {
    return str.length
}

// ค่าคงที่ภาษี
const TAX = 0.07

// ตัวแปรปกติ (x ไม่ถูก export)
let x = 1

// คลาส Book
class Book {
    constructor(isbn, title) {
        this.isbn = isbn
        this.title = title
    }
}

// export หลายรูปแบบ
export { 
    echo1,             // export แบบ named
    getLength1 as default, // export ฟังก์ชันนี้เป็น default export
    TAX as VAT,        // export โดยเปลี่ยนชื่อเป็น VAT
    Book               // export class
}