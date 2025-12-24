✅ Cleaner syntax  
✅ Easier string formatting  
✅ Supports dynamic values inside strings


1️⃣ **String Interpolation (Insert Variables)**
```javascript
const name = "Eren";
console.log(`Hello, ${name}!`); // "Hello, Eren!"
```
2️⃣ **Multi-line Strings (No `\n` Needed)**
```javascript
const message = `This is a 
multi-line 
string.`;
```
3️⃣ **Expression Evaluation Inside `${}`**

```javascript
console.log(`2 + 3 = ${2 + 3}`); // "2 + 3 = 5"
```

4️⃣ **Function Calls Inside `${}`**
```javascript
const greet = (name) => `Hello, ${name}!`; 
console.log(`${greet("Mikasa")}`); // "Hello, Mikasa!"
```