Async/Await makes API calls cleaner and easier to read.

### Example: Fetching Data with Async/Await
```javascript
async function getPost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

getPost(); // Call the function

```

✅ **Why Use Async/Await?**

- **More readable** than `.then()` chaining
- **Easier error handling** with `try...catch`