React is a **JavaScript library** (not a framework) for building **fast and interactive** user interfaces. It was developed by **Facebook (Meta)** and is used for creating **component-based** applications.

### **🔹 Why Use React?**

✅ **Component-Based** – Break UI into reusable pieces.  
✅ **Fast and Efficient** – Uses a virtual DOM for quick updates.  
✅ **Declarative UI** – Focuses on **what** UI should look like, not how to update it.  
✅ **Rich Ecosystem** – Strong community and libraries.


### 🔹 **JSX (JavaScript XML)**

JSX is a syntax extension that allows writing HTML inside JavaScript.
```jsx
const element = <h1>Hello, React!</h1>;
```
✅ **JSX is not HTML**; it's converted into JavaScript before rendering.

### **🔹 Components in React**

React apps are built using **components**.
#### Function Component (Recommended)
```jsx
function Greeting() {
    return <h1>Hello, World!</h1>;
}
export default Greeting;
```
#### Class Component (Less Used)
```jsx
import React, { Component } from "react"; 
class Greeting extends Component {
	render() { 
	return <h1>Hello, World!</h1>; 
	} 
} export default Greeting;
```
✅ **Function components are preferred** because they are simpler and support **Hooks**.


| Feature                         | React Component ✅        | Regular Function 🛑      |
| ------------------------------- | ------------------------ | ------------------------ |
| **Starts with Capital Letter?** | ✅ Yes (e.g., `Doorbell`) | 🛑 No (e.g., `ringBell`) |
| **Returns JSX/UI?**             | ✅ Yes                    | 🛑 No                    |
| **Used inside `render()`?**     | ✅ Yes                    | 🛑 No                    |
| **Called by an Event?**         | 🛑 No                    | ✅ Yes                    |
| **Used as an Event Handler?**   | 🛑 No                    | ✅ Yes                    |
#### Rendering Components

To show a component inside an HTML page:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import Greeting from "./Greeting"; // Import component

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Greeting />);

```

✅ Components **must be capitalized** (`<Greeting />`, not `<greeting />`).


#### **Props (Component Input)**

Props allow passing data to components.

```jsx
function Welcome(props) {
    return <h1>Hello, {props.name}!</h1>;
}
// Usage
<Welcome name="Alice" />
```

✅ **Props are read-only** (cannot be modified inside the component).


#### **State (Component Data)**

State is used to store **dynamic** data inside a component.
Using `useState` (Modern React)
```jsx
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    );
}
export default Counter;
```
✅ State **updates the UI automatically** when changed.

1️⃣ **`useState(0)`** → This **declares a state variable**.

- `useState` is a React Hook that **allows a function component to store and manage state**.
- `0` is the **initial value** of the state.

2️⃣ **`const [count, setCount]`** → Array Destructuring

- **`count`** → This is the **state variable** (stores the value).
- **`setCount`** → This is the **function to update the state**.

✔ The **state variable** can have any name (`count`, `name`, `user`, etc.).  
✔ The **update function** should follow `setSomething` convention.  
✔ `useState` is the **function** that returns `[state, setState]`.


[[Props & State]] in Deep
#### Handling Events
React uses `onClick`, `onChange`, etc.
```jsx
function ButtonClick() {
    function handleClick() {
        alert("Button clicked!");
    }
    return <button onClick={handleClick}>Click Me</button>;
}

```
	✅ **Event handlers** are written in `{}` inside JSX.