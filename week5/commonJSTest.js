// ใช้ require (CommonJS) import object ที่ export มาจาก self-practice5.js
// destructuring เอาเฉพาะ echo, getLength, MAXSTUDENT ออกมา
const { echo, getLength, MAXSTUDENT } = require("./self-practice5.js")

// เรียกใช้ echo() → ฟังก์ชันส่งค่ากลับเหมือนเดิม
console.log(echo("do somthing..."));
// Output: "do somthing..."

// เรียกใช้ getLength() → ฟังก์ชันคืนค่า length ของ string
console.log(getLength("do anything..."));
// Output: 13

// ใช้ constant MAXSTUDENT → ค่าคงที่ 60
console.log(MAXSTUDENT);
// Output: 60