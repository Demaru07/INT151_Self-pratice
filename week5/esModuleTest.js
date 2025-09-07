// import default (getLength1) + named export (echo1, VAT, Book)
// - getLength1 มาจาก export default
// - echo1 ถูก import โดยเปลี่ยนชื่อเป็น repeat
// - VAT มาจาก TAX ที่ถูก export as VAT
// - Book คือ class ที่ export มา
import getLength1, { echo1 as repeat, VAT, Book }  from "./utility.js"

// ใช้ class Book ที่ import มา
const b1 = new Book(1234, "JS Beginner")
console.log(b1); 
// Output: Book { isbn: 1234, title: "JS Beginner" }

// เรียก echo1 (แต่ใช้ชื่อ repeat ตอน import)
console.log(repeat("No one perfect")); 
// Output: "No one perfect"

// เรียก default export (getLength1) → หาความยาว string
console.log(getLength1("Introduction of JS")); 
// Output: 19

// ใช้ค่า VAT ที่ import มาจาก TAX
console.log(VAT); 
// Output: 0.07