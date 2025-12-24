In JavaScript, **error handling** is essential for writing robust code that gracefully handles unexpected situations, like runtime errors. The `try-catch` block is used to catch and handle exceptions.

### **1️⃣ `try` and `catch`**

- **`try` block**: Contains the code that might throw an error.
- **`catch` block**: Contains the code to handle the error if one occurs in the `try` block.'

```javascript
try {
    // Code that may throw an error
    const result = riskyOperation();
} catch (error) {
    // Code to handle the error
    console.error("An error occurred:", error);
}

```

### **2️⃣ How It Works**:

- **`try`**: You place the code that could potentially throw an error inside the `try` block.
- **`catch`**: If an error occurs in the `try` block, the code inside the `catch` block will run, preventing the program from crashing.


### **3️⃣ `catch` Block Error Object**:

- The **`catch` block** receives an **error object** as a parameter (usually named `error` or `e`).
- This object contains useful information about the error:
    - **`message`**: Describes the error.
    - **`name`**: The type of error (e.g., `SyntaxError`, `ReferenceError`).
    - **`stack`**: The call stack that shows where the error occurred (useful for debugging).


Example:
```javascript
try {
    // A reference error by accessing an undefined variable
    console.log(nonExistentVariable); // Throws ReferenceError
} catch (error) {
    console.log("Error message:", error.message); // ReferenceError: nonExistentVariable is not defined
    console.log("Error name:", error.name); // ReferenceError
    console.log("Error stack:", error.stack); // Shows where the error occurred
}

```


### **4️⃣ `finally` Block** (Optional)

- **`finally`**: This block will **always execute** whether there was an error or not, making it useful for cleanup tasks like closing files, database connections, etc.
`
```javascript
try {
    const number = 10;
    const result = number / 2;
    console.log("Result:", result);
} catch (error) {
    console.log("An error occurred:", error);
} finally {
    console.log("This will always run.");
}

```


Real life example:
```javascript
function processAge(age) {
    try {
        if (isNaN(age)) throw new Error("Age must be a number.");
        if (age <= 0) throw new Error("Age must be a positive number.");
        console.log("Age is valid:", age);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

processAge("abc"); // Error: Age must be a number.
processAge(25);     // Age is valid: 25

```


### **Why Use `try-catch`?**

- **Prevent Crashes**: It prevents the script from terminating if an error occurs.
- **Graceful Error Handling**: It lets you handle errors gracefully by logging or showing a message to the user.
- **Debugging**: Provides valuable error information for debugging.


### **When Should You Use `try-catch` in JavaScript?**

✅ When handling **API failures** (network requests).  
✅ When working with **JSON parsing**.  
✅ When handling **asynchronous errors** in `async/await`.  
✅ When dealing with **user input validation**.
### **Key Takeaways**

- **`try`**: Run code that might throw an error.
- **`catch`**: Handle any errors that happen in the `try` block.
- **`finally`**: Always execute code (clean-up tasks) no matter what.
- **Error Object**: Contains useful information like `message`, `name`, and `stack`.


# **JavaScript `try-catch` does NOT work for async errors** (you need `.catch()`),



### **❌ Differences: Java vs. JavaScript Exception Handling**

| **Feature**                   | **JavaScript (`try-catch`)**                                              | **Java (`try-catch`)**                         |
| ----------------------------- | ------------------------------------------------------------------------- | ---------------------------------------------- |
| **Scope**                     | Handles **only runtime errors**                                           | Handles **both compile-time & runtime errors** |
| **Checked Exceptions**        | ❌ No checked exceptions                                                   | ✅ Has checked exceptions (must be handled)     |
| **Asynchronous Errors**       | ❌ `try-catch` does NOT work for async code (requires `catch` on Promises) | ✅ Works for both sync and async exceptions     |
| **Strict Exception Handling** | ❌ Not required (optional)                                                 | ✅ Required for checked exceptions              |
| **Throws Declaration**        | ❌ No `throws` keyword                                                     | ✅ Uses `throws` to declare exceptions          |