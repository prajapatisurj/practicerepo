A **callback** is simply a function that is **passed as an argument** to another function and is executed **after** the first function completes.

### if not using callback
```javascript
function boilWater() {
  console.log("🔥 Boiling water...");

  setTimeout(() => {
    console.log("✅ Water is boiled!");
  }, 2000);
}

function makeTea() {
  console.log("🍵 Making tea with boiled water!");
}

boilWater();
makeTea();

```
output:
```csharp
🔥 Boiling water...
🍵 Making tea with boiled water!   ❌ (Tea is made before water boils!)
✅ Water is boiled!                (After 2 sec)
```

With Callback
```javascript
function boilWater(callback) {
  console.log("🔥 Boiling water...");

  setTimeout(() => {
    console.log("✅ Water is boiled!");
    callback(); 
    // Call the next function after boiling water
  }, 2000);
}

function makeTea() {
  console.log("🍵 Making tea with boiled water!");
}

boilWater(makeTea);  // Passing `makeTea` as a callback

```
Output:
```csharp
🔥 Boiling water...
✅ Water is boiled!   (After 2 sec)
🍵 Making green tea with boiled water!

```
### **🔹 Summary of Callbacks**

| Feature                      | Description                                                                          |
| ---------------------------- | ------------------------------------------------------------------------------------ |
| **What is a Callback?**      | A function passed as an argument and executed **after** another function completes.  |
| **Why Use It?**              | To ensure code runs in the correct order, especially in **asynchronous** operations. |
| **Issue Without Callbacks?** | Code may execute **too early**, before a process is finished.                        |
#### **❌ Problems**

1️⃣ **Manual Error Checking:** Every callback needs an `if-else` check for errors.  
2️⃣ **Nested Errors:** More callbacks = more error handling complexity.