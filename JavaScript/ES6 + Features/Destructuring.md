**Destructuring** allows you to **extract values** from arrays or objects and assign them to variables **in a clean way**.


```javascript
// 📌 1️⃣ Array Destructuring
const numbers = [1, 2, 3];

const [a, b, c] = numbers;  
console.log(a, b, c); // 1, 2, 3

// ✅ Skipping values
const [first, , third] = numbers;  
console.log(first, third); // 1, 3

// ✅ Using rest operator
const [firstNum, ...rest] = numbers;
console.log(firstNum, rest); // 1, [2, 3]

// 📌 2️⃣ Object Destructuring
const person = { name: "Eren", age: 19 };

// ✅ Basic object destructuring
const { name, age } = person;
console.log(name, age); // "Eren", 19

// ✅ Renaming variables
const { name: hero, age: years } = person;
console.log(hero, years); // "Eren", 19

// ✅ Setting default values
const { name: character, city = "Unknown" } = person;
console.log(character, city); // "Eren", "Unknown" (if property is missing)



### **🚀 Quick Summary:**

✅ **Arrays** → `const [a, b] = array;`  
✅ **Objects** → `const { key } = object;`  
✅ Can rename (`key: newName`), skip, or use defaults.

usage:
suppose you want a single element from a 

const removed = reorderedItems.splice(result.source.index, 1);
(removal and retrieval) in a single, clear, and standard way.
why not copy it first and remove later, we are doing the both tasks in same line.