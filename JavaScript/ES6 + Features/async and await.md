**Async** and **await** are tools in JavaScript that make **working with asynchronous code** (like promises) simpler and more readable. They allow you to write asynchronous code **as if it's synchronous**.

#### ✅ **What `await` Actually Does?**

✔️ **YES** → While `await` is waiting for a response, **JavaScript can run other tasks** (like event handlers, logs, animations, etc.).  

✔️ **BUT** → It **only pauses the execution of the `async` function itself** (not the whole program).
when you write

```javascript
const response = await fetch(url);

```
It **pauses the execution of that function only** until the `fetch(url)` promise is resolved.

Example:
```javascript
async function fetchData() {
    console.log("1️⃣ Start fetching...");
    
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    console.log("2️⃣ Fetched response...");

    const data = await response.json();
    console.log("3️⃣ Data processed:", data);
}

fetchData();

console.log("4️⃣ I am running while waiting! 🏃‍♂️");

```

OUTPUT:
```yaml
1️⃣ Start fetching...
4️⃣ I am running while waiting! 🏃‍♂️  (✅ This runs immediately)
2️⃣ Fetched response... (⏳ After fetch is done)
3️⃣ Data processed: { userId: 1, id: 1, title: "...", completed: false }

```

### **🔹 What Happens in JavaScript?**

✔️ **JavaScript does NOT block the whole program**.  
✔️ Other **tasks (like event handlers, UI updates, console logs, etc.) keep running**.  
✔️ But **inside the function**, execution waits until `fetch(url)` is done.
### **Key Points**:

- **`async`**: A function marked with `async` automatically returns a promise and allows the use of `await` inside it.
- **`await`**: Used inside an `async` function to **pause** execution until the promise resolves (or rejects). It makes the code wait and look synchronous.

```javascript
// Using async and await
async function makeTea() {
  // Await pauses execution until the promise resolves
  const water = await boilWater();
  const teaLeaves = await addTeaLeaves();
  const sugar = await addSugar();
  
  console.log("🍵 Tea is ready!");
}

// Simulate boiling water, adding tea leaves, and sugar with promises
function boilWater() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("🔥 Boiling water...");
      resolve();
    }, 2000);
  });
}

function addTeaLeaves() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("🍃 Adding tea leaves...");
      resolve();
    }, 1000);
  });
}

function addSugar() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("🍚 Adding sugar...");
      resolve();
    }, 1000);
  });
}

makeTea();  // Calling the async function

```



[[async and await for fetching data]]
**JavaScript `try-catch` does NOT work for async errors** (you need `.catch()`),