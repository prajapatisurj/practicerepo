### **Controlled Components Approach**

For controlled components, you typically handle form submission by accessing the state variables directly.
#### **Steps:**

1. Use `useState` to manage form inputs.
2. Handle form submission using an `onSubmit` event handler.
3. Access the state variables to get the form data.

```jsx
import React, { useState } from "react";

function ControlledForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    // Perform form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ControlledForm;
```


#important
1. **Arrow Function**: Use an arrow function to defer the execution of `handleChange` until the event occurs.
2. **Avoid Immediate Execution**: Don’t call the function directly (e.g., `handleChange(task.id)`), as it will execute during rendering.
3. **Alternative**: Use `bind` if you prefer a more functional programming style.
### **Uncontrolled Components Approach**

For uncontrolled components, you access the form data using `ref` or the `FormData` API.
#### **Steps:**

1. Use `useRef` to create references for form inputs.
2. Access the input values using the `ref` or `FormData` API on form submission.


```jsx
import React, { useRef } from "react";

function UncontrolledForm() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", usernameRef.current.value);
    console.log("Password:", passwordRef.current.value);
    // Perform form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" ref={usernameRef} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" ref={passwordRef} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledForm;
```
## **3. Best Practices**

1. **Use Controlled Components for Most Cases:**
    - Controlled components provide better control and real-time validation.
    - They align with React's declarative nature.
        
2. **Use Uncontrolled Components for Simple Forms:**
    - Uncontrolled components are useful for simple forms or when integrating with non-React code.
        
3. **Validate Inputs:**
    - Add validation logic to ensure the form data is correct before submission.
        
4. **Prevent Default Behavior:**
    - Always call `e.preventDefault()` in the `onSubmit` handler to prevent the page from reloading.

5. **Handle Errors Gracefully:**
    - Display error messages if the user enters invalid data.


#### The `onSubmit` event handler is essential for:

1. **Preventing the default form behavior** (page reload). <span style="background:#fff88f">**when i submit page won't reload**</span>
2. **Validating form data** before submission.
3. **Processing form data** (e.g., sending it to a server or updating state).

- Prevent page reloads.
- Validate and process form data.
- Create dynamic and interactive user experiences.