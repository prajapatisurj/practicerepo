
### **Fetching Data using fetch()**

JavaScript provides the `fetch()` function to **send requests** to APIs and **get responses**.

### **Basic Example: Fetching JSON Data**
```javascript
fetch("https://jsonplaceholder.typicode.com/posts/1") 
.then(response => response.json()) // Convert response to JSON 
.then(data => console.log(data)) // Log the data 
.catch(error => console.error("Error:", error)); // Handle errors
```

✅ **What Happens Here?**

1. `fetch()` sends a **GET request** to the API.
2. The API responds with **JSON data**.
3. We convert the response to JSON using `.json()`.
4. We **log** the data or handle any errors.