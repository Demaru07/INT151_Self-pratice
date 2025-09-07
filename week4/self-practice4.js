// โค้ดทั้งหมดที่ทำนำมาจากคลาสของอาจารย์อุมาพร

// 1. function declaration (การประกาศฟังก์ชันแบบปกติ)
function multiply1(a, b) {
    return a * b;
}
// console.log(multiply1(2,3))

// 2. function expression (เขียนฟังก์ชันแบบ arrow function)
const multiply2 = (a, b) => { return a * b }
console.log(multiply2(4, 2));

// 3. function expression (เขียนฟังก์ชันเก็บไว้ในตัวแปรแบบปกติ)
const multiply3 = function(a, b) { return a * b }
console.log(multiply3(5, 2));

// typeof ใช้ดูชนิดข้อมูล (function ก็เป็น object ประเภทหนึ่ง)
console.log(typeof multiply1); // function
console.log(typeof multiply2); // function
console.log(typeof multiply3); // function

// assign ฟังก์ชันให้กับตัวแปรอื่น (อ้างอิงไปยังฟังก์ชันเดียวกัน)
const x = multiply1
const y = multiply2
const z = multiply3

// ตรวจสอบ type อีกครั้ง
console.log(typeof x); // function
console.log(typeof y); // function
console.log(typeof z); // function

// เรียกใช้งานฟังก์ชันผ่านตัวแปร
console.log(x(2, 3)); // 6
console.log(y(3, 3)); // 9
console.log(z(4, 3)); // 12

// กรณีตัวแปรแบบ primitive (number, string, boolean) จะ copy ค่า ไม่ใช่ reference
let a = 1 
let b = a
console.log(typeof a); // number
console.log(typeof b); // number

// การเปรียบเทียบ function reference (x อ้างไปที่ multiply1 จริง ๆ)
if (x === multiply1)
    console.log("x equals to multiply1");
else
    console.log("x not equals to multiply1");

// ฟังก์ชัน return ฟังก์ชัน (higher-order function)
function sayGoodbye() {
    return 'Good bye'
}
function doSomthing() {
    return sayGoodbye // return function ไม่ใช่ค่าที่ return จาก function
}
console.log(doSomthing()()); // เรียกซ้อนกัน 2 ครั้ง → ได้ "Good bye"

// การส่ง object เข้าไปใน function → อ้างอิง (reference)
function myFunc(theObject) {
    theObject.model = "A9999"  // เปลี่ยนค่า property ของ object
}
const product = {model: "A1001", price: 199}
console.log(product.model); // A1001

myFunc(product); // เปลี่ยนค่าในฟังก์ชัน
console.log(product.model); // A9999 (ถูกเปลี่ยนจริง ๆ เพราะส่ง reference)

// แต่ primitive (number, string, boolean) ไม่เปลี่ยนค่าเดิม
function square(side) {
    side = 9; // เปลี่ยนเฉพาะตัวแปรในฟังก์ชัน
}
let theSide = 2;
square(theSide);
console.log(theSide); // 2 (ไม่เปลี่ยน)

// arguments object → ใช้เข้าถึงค่าที่ส่งเข้ามาในฟังก์ชัน
function sum(x, y, ...z) {
    // ลูปผ่าน arguments ทั้งหมด
    for (argu of arguments) {
        console.log(argu);
    }
    console.log(`length: ${arguments.length}`); // จำนวน argument ทั้งหมด
    console.log(`x: ${x}`);
    console.log(`y: ${y}`);
    console.log(`z: ${z}`); // rest parameter จะเก็บที่เหลือ
}
sum(1, 2, 3, 4, 5, 6, 7, 8);

// ใช้ arguments มาบวกเลขทั้งหมด
function sum2(x, y, ...z) {
    let result = 0
    for (argu of arguments) {
        result += argu;
    }
    return result
}
console.log(sum2(2, 4, 5, 6, 8)); // 25

// default parameters (ตั้งค่าเริ่มต้นได้)
function greeting(greet = "Hello", whom = "Guest", quote = "How are you?") {
    return `${greet} ${whom} ${quote}`
}

console.log(greeting("hi"));                        // hi Guest How are you?
console.log(greeting("Good morning", "Guy", "Guest!")); // Good morning Guy Guest!
console.log(greeting(undefined, null, "Fine"));     // Hello null Fine
console.log(greeting());                            // Hello Guest How are you?

// spread operator ใช้กระจาย array ออกเป็น arguments
function sum(num1, num2, num3) {
    return num1 + num2 + num3
}
let nums = [5, 20, 15]
console.log(sum(...nums)); // 40

// ฟังก์ชันนับความถี่ของคำในประโยค
function getFreqOfWords(sentence) {
  if (sentence === null || sentence === undefined) {
    return undefined;
  } else {
    // แปลงเป็นตัวพิมพ์เล็กทั้งหมด และแยกคำด้วยช่องว่าง
    const words = sentence.toLowerCase().split(" ");

    // object เก็บจำนวนความถี่
    const frequency = {};

    for (let word of words) {
      // ถ้ามี word อยู่แล้ว → บวกเพิ่ม
      if (frequency[word]) {
        frequency[word]++;
      } else {
        // ถ้ายังไม่มี → ใส่ค่าเริ่มต้นเป็น 1
        frequency[word] = 1;
      }
    }

    return frequency;
  }
}

console.log(getFreqOfWords("I love JS and I love coding"));
// { i: 2, love: 2, js: 1, and: 1, coding: 1 }