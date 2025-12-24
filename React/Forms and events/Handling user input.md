### **Controlled Components Approach**

In controlled components, React manages the state of the input. This is the most common and recommended approach for handling user input in React.


#### **Steps:**

1. Use `useState` to create a state variable for the input value.
2. Bind the input's `value` to the state variable.
3. Update the state using an `onChange` event handler.
```jsx
import React, { useState } from "react";

function UserInputForm() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Update state on input change
  };

  return (
    <div>
      <label htmlFor="userInput">Enter something:</label>
      <input
        type="text"
        id="userInput"
        value={inputValue}
        onChange={handleInputChange}
      />
      <p>You typed: {inputValue}</p>
    </div>
  );
}

export default UserInputForm;
```

### **Uncontrolled Components Approach**

In uncontrolled components, the DOM manages the input's state, and you use a `ref` to access the value when needed.

#### **Steps:**

1. Use `useRef` to create a reference to the input element.
2. Access the input's value using the `ref` when needed (e.g., on form submission).

```jsx
import React, { useRef } from "react";

function UserInputForm() {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("You entered: " + inputRef.current.value); // Access value via ref
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="userInput">Enter something:</label>
      <input type="text" id="userInput" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
}
export default UserInputForm;
```
