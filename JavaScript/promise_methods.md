# 📘 JavaScript Promise Methods with API Examples

This document explains all important **Promise methods** and how to use them with **APIs**.

---

## 🔹 1. `Promise.all`

- Runs multiple promises **in parallel**.
- ✅ Resolves only if **all succeed**.
- ❌ Rejects immediately if **any fails**.

```js
async function exampleAll() {
  try {
    const [post1, post2, post3] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/posts/1").then(r => r.json()),
      fetch("https://jsonplaceholder.typicode.com/posts/2").then(r => r.json()),
      fetch("https://jsonplaceholder.typicode.com/posts/3").then(r => r.json())
    ]);
    console.log(post1, post2, post3);
  } catch (error) {
    console.error("One API failed:", error);
  }
}
exampleAll();
```

---

## 🔹 2. `Promise.allSettled`

- Runs multiple promises **in parallel**.
- ✅ Waits for **all promises to settle** (fulfilled or rejected).
- Always resolves with array of `{status, value/reason}`.

```js
async function exampleAllSettled() {
  const results = await Promise.allSettled([
    fetch("https://jsonplaceholder.typicode.com/posts/1").then(r => r.json()),
    fetch("https://jsonplaceholder.typicode.com/invalid-url").then(r => r.json()),
    fetch("https://jsonplaceholder.typicode.com/posts/3").then(r => r.json())
  ]);
  console.log("AllSettled:", results);
}
exampleAllSettled();
```

---

## 🔹 3. `Promise.race`

- Returns the result of the **first settled promise** (fulfilled or rejected).
- Useful for **timeouts**.

```js
async function exampleRace() {
  try {
    const result = await Promise.race([
      fetch("https://jsonplaceholder.typicode.com/posts/1").then(r => r.json()),
      new Promise((_, reject) => setTimeout(() => reject("Timeout!"), 2000))
    ]);
    console.log("Race result:", result);
  } catch (err) {
    console.error("Race error:", err);
  }
}
exampleRace();
```

---

## 🔹 4. `Promise.any`

- Returns the **first fulfilled promise**.
- Ignores rejections unless **all fail**.
- If all fail → returns `AggregateError`.

```js
async function exampleAny() {
  try {
    const result = await Promise.any([
      fetch("https://invalid-url-1.com").then(r => r.json()),
      fetch("https://jsonplaceholder.typicode.com/posts/2").then(r => r.json()),
      fetch("https://invalid-url-2.com").then(r => r.json())
    ]);
    console.log("Any success:", result);
  } catch (err) {
    console.error("All failed:", err);
  }
}
exampleAny();
```

---

## 🔹 5. Chaining Promises (Sequential APIs)

Use when one API depends on the result of another.

```js
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(res => res.json())
  .then(user => fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`))
  .then(res => res.json())
  .then(posts => console.log("User Posts:", posts))
  .catch(err => console.error("Error:", err));
```

---

## 🔹 6. `async/await` with `try...catch`

Cleaner syntax for both sequential and parallel calls.

### ✅ Parallel APIs
```js
async function fetchParallel() {
  try {
    const [user, posts, comments] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users/1").then(r => r.json()),
      fetch("https://jsonplaceholder.typicode.com/posts").then(r => r.json()),
      fetch("https://jsonplaceholder.typicode.com/comments").then(r => r.json())
    ]);
    console.log(user, posts, comments);
  } catch (err) {
    console.error("Error:", err);
  }
}
fetchParallel();
```

### ✅ Sequential APIs
```js
async function fetchSequential() {
  try {
    const user = await fetch("https://jsonplaceholder.typicode.com/users/1").then(r => r.json());
    const posts = await fetch(\`https://jsonplaceholder.typicode.com/posts?userId=\${user.id}\`).then(r => r.json());
    console.log("User:", user);
    console.log("Posts:", posts);
  } catch (err) {
    console.error(err);
  }
}
fetchSequential();
```

---

## 🔹 7. Custom Wrapper (Timeout Example)

```js
function fetchWithTimeout(url, ms = 3000) {
  return Promise.race([
    fetch(url),
    new Promise((_, reject) => setTimeout(() => reject("Timeout!"), ms))
  ]);
}

fetchWithTimeout("https://jsonplaceholder.typicode.com/posts/1", 2000)
  .then(res => res.json())
  .then(data => console.log("Data with timeout:", data))
  .catch(err => console.error("Error:", err));
```

---

<!-- “JavaScript single-threaded है, लेकिन asynchronous behavior browser 
की Web APIs handle करती हैं।
जब async task complete होता है तो उसका callback Task Queue में जाता है।
Event Loop Call Stack खाली होने पर Queue से callback उठाकर execute करता है।
Promises का callback Microtask Queue में जाता है जिसकी priority सबसे ज्यादा है।” -->

# 📌 Summary

| Method                  | Best Use Case |
|-------------------------|---------------|
| **Promise.all**         | Run multiple APIs → need all results, fail if one fails |
| **Promise.allSettled**  | Run multiple APIs → get results of all, even if some fail |
| **Promise.race**        | Compete promises → need the fastest (success/fail) |
| **Promise.any**         | Compete promises → need the fastest **success only** |
| **Chaining**            | Sequential API calls (one depends on another) |
| **async/await**         | Cleaner syntax for sequential & parallel handling |
| **Custom wrappers**     | Timeout, retries, fallback handling |

