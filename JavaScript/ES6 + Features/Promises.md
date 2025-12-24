A **Promise** is an object that represents the **eventual completion** (or failure) of an asynchronous operation.

### **🔹 Why Use Promises Instead of Callbacks?**

✔ **Avoid Callback Hell** → Promises make the code **flat & readable**.  
✔ **Better Error Handling** → Errors can be caught in one place using `.catch()`.  
✔ **Easier to Chain Operations** → No deep nesting.

### **🔹 Creating a Basic Promise**

A **Promise** has **three states**:  
1️⃣ **Pending** → The operation has started but not completed.  
2️⃣ **Resolved (Fulfilled)** → The operation completed successfully.  
3️⃣ **Rejected** → The operation failed.

🔸 Example: Creating and Using a Promise
```javascript
// Create a Promise
const myPromise = new Promise((resolve, reject) => {
  let success = true; // Change to false to see rejection
  setTimeout(() => {
    if (success) {
      resolve("✅ Data fetched successfully!");
    } else {
      reject("❌ Failed to fetch data.");
    }
  }, 2000);
});

// Using the Promise
myPromise
  .then((result) => {
    console.log(result); // Runs if promise is resolved
  })
  .catch((error) => {
    console.log(error); // Runs if promise is rejected
  });

```


🛑 Callback Hell Version

```javascript
boilWater(() => { addTeaLeaves(() => { addSugar(() => { serveTea(); }); }); });
```

✅ Promise Version (Much Cleaner!) 

```javascript
function boilWater() {
  return new Promise((resolve) => {
    console.log("🔥 Boiling water...");
    setTimeout(() => {
      console.log("✅ Water is boiled!");
      resolve();
    }, 2000);
  });
}

function addTeaLeaves() {
  return new Promise((resolve) => {
    console.log("🍃 Adding tea leaves...");
    setTimeout(() => {
      console.log("✅ Tea leaves added!");
      resolve();
    }, 1000);
  });
}

function addSugar() {
  return new Promise((resolve) => {
    console.log("🍚 Adding sugar...");
    setTimeout(() => {
      console.log("✅ Sugar added!");
      resolve();
    }, 1000);
  });
}

function serveTea() {
  console.log("🍵 Tea is ready to serve!");
}

// Using Promises (No Nesting!)
boilWater()
  .then(addTeaLeaves)
  .then(addSugar)
  .then(serveTea)
  .catch((error) => console.log(error));

```

### **Problems with Promises**:

1. **Chaining Complexity**: Long `.then()` chains can become hard to read and maintain.
2. **Error Handling**: Error handling is centralized with `.catch()`, but deep errors can still be hard to debug.
3. **Unhandled Rejections**: If a promise is rejected and not caught, it can lead to unhandled promise rejections.
4. **Promisifying**: Legacy code or callback-based functions need to be manually converted to promises, which can be tedious.
5. **Parallel Tasks**: Managing multiple promises in parallel (e.g., with `Promise.all()`) can be tricky, especially if one rejects.