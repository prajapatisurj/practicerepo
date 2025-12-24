To send data (e.g., form submissions), we use a **POST request** with `fetch()`.

```javascript
async function createPost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",  
      headers: { "Content-Type": "application/json" },  
      body: JSON.stringify({ title: "New Post", body: "This is a new post", userId: 1 })  
    });

    const data = await response.json();
    console.log("Created Post:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

createPost();

```


✅ **What Happens Here?**

1. `method: "POST"` tells the API we're sending data.
2. `headers` specify that we’re sending **JSON data**.
3. `body` contains the actual **data to send**.