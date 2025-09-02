//1. function declaration
function multiply1(a,b) {
    return a*b
}
// console.log(multiply1(2,3))

//2. function expression (using arrow funtion syntax)
const multiply2 = (a,b) => {return a*b}
console.log(multiply2(4,2));
//3. function expression (using function declaration)
const multiply3 = function(a,b) {return a*b}
console.log(multiply3(5,2));

console.log(typeof multiply1);
console.log(typeof multiply2);
console.log(typeof multiply3);
const x = multiply1
const y = multiply2
const z = multiply3
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);
console.log(x(2,3));
console.log(y(3,3));
console.log(z(4,3));

let a = 1 
let b = a
console.log(typeof a);
console.log(typeof b);

if (x === multiply1)
    console.log("x equals to multiply1");
else
console.log("x not equals to multiply1");

function sayGoodbye() {
    return 'Good bye'

}
function doSomthing() {
    return sayGoodbye
}
console.log(doSomthing()());

function myFunc(theObject) {
    theObject.model = "A9999"
}
const product = {model: "A1001", price: 199}
console.log(product.model);

myFunc(product);
console.log(product.model);

function square(side) {
    side = 9;
}
let theSide = 2;
square(theSide);
console.log(theSide);

function sum(x, y, ...z) {
    // return x + y
    // return argument[0] + argument[1]
    for (argu of arguments) {
        console.log(argu);
    }
    console.log(`length: ${arguments.length}`);
    console.log(`x: ${x}`);
    console.log(`y: ${y}`);
    console.log(`z: ${z}`);
}
sum(1, 2, 3, 4, 5, 6, 7, 8)

function sum2(x, y, ...z) {
    let result = 0
    for (argu of arguments) {
        result += argu;
    }
    return result
}
console.log(sum2(2,4,5,6,8));

function greeting(greet = "Hello", whom = "Guest", quote = "How are you?") {
    return `${greet} ${whom} ${quote}`
}

console.log(greeting("hi"));
console.log(greeting("Good morning", "Guy", "Guest!"));
console.log(greeting(undefined, null, "Fine"));
console.log(greeting());

function sum(num1, num2, num3) {
    return num1 + num2 + num3
}
let nums = [5, 20, 15]
// spread parameter
console.log(sum(...nums));

function getFreqOfWords(sentence) {
  if (sentence === null || sentence === undefined) {
    return undefined;
  } else {
    // แปลงเป็นตัวพิมพ์เล็กทั้งหมด
    const words = sentence.toLowerCase().split(" ");

    // สร้าง object สำหรับเก็บความถี่
    const frequency = {};

    for (let word of words) {
      // ถ้ามี word อยู่แล้วใน frequency ให้บวกเพิ่ม
      if (frequency[word]) {
        frequency[word]++;
      } else {
        // ถ้าไม่มีให้เริ่มนับที่ 1
        frequency[word] = 1;
      }
    }

    return frequency;
  }
}

console.log(getFreqOfWords("I love JS and I love coding"));