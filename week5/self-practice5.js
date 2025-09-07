// โค้ดทั้งหมดที่ทำนำมาจากคลาสของอาจารย์อุมาพร

// กำหนด array ของ student พร้อมคะแนน
const studentScoces = [
  { name: 'Alice' ,score: 85 },
  { name: 'Bob', score: 92 },
  { name: 'Charlie', score: 68 },
  { name: 'David', score: 55 },
  { name: 'Eve', score: 78 },
];
 
// ฟังก์ชันหาชื่อของนักเรียนที่สอบผ่าน (>= 70)
function getPassingNames(studentScoces){
    pass_student = [] // สร้าง array ว่างเพื่อเก็บผลลัพธ์
    // filter คัดคนที่ได้คะแนน >= 70
    // แล้ว forEach เพื่อดึงชื่อและทำเป็นตัวพิมพ์ใหญ่
    studentScoces.filter(value => value.score >= 70).forEach(element => {
        pass_student.push(element.name.toUpperCase())
    });
    return pass_student
}

// เรียกใช้ฟังก์ชัน
const passingNames = getPassingNames(studentScoces);
console.log(passingNames);
// Output: ["ALICE", "BOB", "EVE"]

// ------------------- Array methods -------------------

// ตรวจสอบว่าเป็น array หรือไม่
console.log(Array.isArray([]))       // true
console.log(Array.isArray([1, true])) // true
console.log(Array.isArray("[]"))     // false (string ไม่ใช่ array)

// รวม 2 array
const array1 = ["a", "b", "c"]
const array2 = ["d", "e", "f"]
const array3 = array1.concat(array2)
console.log(array3) // ["a","b","c","d","e","f"]

// แปลง array → string
console.log(array3.toString()) // "a,b,c,d,e,f"

// reverse array
const nums = [13, 5, 7]
nums.reverse() 
console.log(nums) // [7, 5, 13]

// sort ตัวเลข (เรียงจากน้อย → มาก)
const arr14 = [1, 30, 4, 21, 10000]
arr14.sort((a, b) => a - b)
console.log(`arr14: ${arr14}`); // arr14: 1,4,21,30,10000

// ------------------- Object array sort -------------------

// array ของ student object
const stds = [
  { id: 1, name: "Tisanai", email: "tisanai@sit.kmutt.ac.th" },
  { id: 5, name: "Pornchai", email: "pornchai@sit.kmutt.ac.th" },
  { id: 2, name: "Suda", email: "suda@sit.kmutt.ac.th" },
]

// sort ตามชื่อ (ใช้ localeCompare)
const newstds = stds.sort((a, b) => 
    a.name.localeCompare(b.name)
);
console.log(newstds);
// เรียงชื่อ: Pornchai, Suda, Tisanai

// ------------------- CommonJS export -------------------

// ฟังก์ชันส่งค่ากลับเหมือนเดิม
function echo(value) {
    return value
}

// arrow function หาความยาว string
const getLength = (str) => str.length

// constant กำหนดค่าสูงสุด
const MAXSTUDENT = 60

// export ออกไป (Node.js commonJS)
module.exports = { echo, getLength, MAXSTUDENT }