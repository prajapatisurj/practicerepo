
# Event Handling in React

- **Definition**: Handling user interactions (clicks, inputs, etc.) in React using synthetic events.
- **Syntax**: Use camelCase event names (e.g., `onClick`, `onChange`) in JSX.
- **Basic Example**: 
  - `<button onClick={handleClick}>Click Me</button>`
  - `function handleClick() { alert('Clicked!'); }`
- **Pass Function Reference**: Use `onClick={handleClick}`, not `onClick={handleClick()}` (runs on render).
- **Arguments**: Wrap in arrow function: `onClick={() => handleClick('data')}`.
- **Event Object**: Access via parameter (e.g., `event.target.value`).
- **Forms**: 
  - `onChange` for inputs: `<input onChange={(e) => setValue(e.target.value)} />`.
  - `onSubmit` for forms: `<form onSubmit={handleSubmit}>`.
- **Prevent Default**: Use `event.preventDefault()` (e.g., stop form refresh).
- **Common Events**: `onClick`, `onChange`, `onSubmit`, `onKeyDown`, `onMouseOver`.
- **Best Practices**: 
  - Define handlers inside component.
  - Use descriptive names (e.g., `handleSubmit`).
  - Avoid complex inline functions.

## Summary
Event handling in React uses synthetic events attached via camelCase props (e.g., `onClick`). Pass function references, not calls, and use arrow functions for arguments. Access event details with `event`, control inputs with state, and prevent default behavior as needed. Keep handlers clear and organized.


## Best Practices

  

- Define handlers in component.
- Use descriptive names (e.g., handleClick).
- Avoid complex inline functions.
## **1️⃣ Handling Events in React**

React uses **camelCase** for event handlers (e.g., `onClick`, `onChange`). Events are passed as arguments to functions.

To add an event handler, you will first define a function and then [pass it as a prop](https://react.dev/learn/passing-props-to-a-component) to the appropriate JSX tag. For example, here is a button that doesn’t do anything yet:

```jsx
export default function Button() {
  return (
    <button>
      I don't do anything
    </button>
  );
}
```


```jsx
export default function Button() {
 
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}
```

- `onClick` is **the event handler attribute** (it listens for the event).
- `handleClick` is **the event handler function** (it runs when the event occurs).
### **2️⃣ So, Which One is the Event?**

- `onClick` itself **is NOT the event**, it’s just an attribute that listens for the **click event**.
- When the button is clicked, the **actual event** (a `click` event) is **automatically passed** to the `handleClick` function.
Doorbell analogy
```jsx
import React from "react";
import ReactDOM from "react-dom/client";

// ✅ Component (Starts with Capital Letter & Returns JSX)
function Doorbell() {
  function ringBell() {  // 🛑 Regular Function (Handles Event)
    alert("🔔 Ding Dong! Someone is at the door!");
  }

  return (
    <div>
      <h2>🏡 House</h2>
      <button onClick={ringBell}>Press Doorbell</button>  {/* Event */}
    </div>
  );
}

// ✅ Rendering the Component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Doorbell />);
```

| Concept                | Doorbell Example                       | Code Example                         |
| ---------------------- | -------------------------------------- | ------------------------------------ |
| **Event**              | Pressing the doorbell button           | `onClick` in `<button>`              |
| **Event Handler**      | The bell ringing inside the house      | `ringBell()` function                |
| **Function Execution** | The visitor's press triggers the sound | Function runs when button is clicked |

```jsx 

//Component
function AlertButton({ message, children }) {
  return (
    <button onClick={() => alert(message)}>
      {children}
    </button>
  );
}


export default function Toolbar() {
  return (
    <div>
      <AlertButton message="Playing!">
        Play Movie
      </AlertButton>
      <AlertButton message="Uploading!">
        Upload Image
      </AlertButton>
    </div>
  );
}

```




[[Event Handler as props]]