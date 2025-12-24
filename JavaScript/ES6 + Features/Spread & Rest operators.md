### **📌 Simple Rule to Remember:**

✅ **Rest (`...`) → Receiving End** (Function parameters)  
✅ **Spread (`...`) → Sending End** (Expanding arrays/objects)

Both **spread** and **rest** use `...` (three dots), but they work differently.

![[Spread & Rest operators.png]]

### **Spread Operator** -> Expands / Unpacks Data

✅ **Used to copy, merge, or expand elements**
 

### **Rest Operator **  -> Gathers / Collects Data

✅ **Used in function arguments and destructuring**
```javascript
// 📌 Spread Operator (`...`) – Expands arrays/objects

// 1️⃣ Copy Arrays / Objects
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

const obj1 = { name: "Levi" };
const obj2 = { ...obj1, age: 35 }; // { name: "Levi", age: 35 }

// 2️⃣ Merge Arrays / Objects
const a = [1, 2], b = [3, 4];
const merged = [...a, ...b]; // [1, 2, 3, 4]

const objA = { name: "Eren" }, objB = { age: 19 };
const mergedObj = { ...objA, ...objB }; // { name: "Eren", age: 19 }

// 📌 Rest Operator (`...`) – Gathers remaining items

// 1️⃣ Function with Variable Arguments
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}


console.log(sum(1, 2, 3, 4)); // 10

// 2️⃣ Destructuring with Rest 

const arr=[]
const [first, ...rest] = [1, 2, 3, 4];
console.log(first); // 1
console.log(rest);  // [2, 3, 4]

```


