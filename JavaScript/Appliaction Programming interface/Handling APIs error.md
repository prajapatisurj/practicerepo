Errors can happen due to **network issues** or **server problems**.  
Always **check response status** before processing data.

Example:
```javascript
async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/10000"); // Invalid ID
    if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Fetch Error:", error.message);
  }
}

fetchData();

```
✅ **What Happens Here?**

- `if (!response.ok)` checks if the request **failed**.
- We throw a custom **error message** instead of processing invalid data.
