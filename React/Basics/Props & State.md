In React, **props** and **state** are essential concepts for managing and passing data between components.

#### **1️⃣ Props (Short for Properties)**

- **Props** are used to **pass data** from a **parent component** to a **child component**.
- Props are **immutable**, meaning a child component cannot modify the props it receives.
- They allow for **reusability** and **dynamic behavior** of components.

```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;  // Displaying the name passed as a prop
}

function App() {
  return (
    <div>
      <Greeting name="Alice" />  {/* Passing 'name' as a prop */}
      <Greeting name="Bob" />    {/* Passing 'name' as a prop */}
    </div>
  );
}
```

- **`Greeting`** component receives `name` as a prop.
- **`App`** component passes the value of `name` to `Greeting` when rendering.
- Props are **read-only** in the child component. You cannot modify `name` inside the `Greeting` component.

📌 **`App` is the parent because it owns and renders the `Greeting` component.**  
📌 **`Greeting` is the child because it receives data (`name`) from `App`.**

#### **2️⃣ State**

- **State** is used to store and manage data that **changes over time** in a component.
- Unlike props, **state is mutable**—it can be updated or changed.
- **State** is managed within the component itself.
- setState is also asynchronous [[2025-03-07 Local Storage problem]]

In **Functional Components**, you use the `useState` hook to manage state.

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);  // Initializing state with value 0

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>  {/* Updating state */}
    </div>
  );
}

function App() {
  return (
    <div>
      <Counter />  {/* Rendering Counter component */}
    </div>
  );
}

```

### **Key Differences Between Props & State**

| Feature              | **Props**                                                  | **State**                                          |
| -------------------- | ---------------------------------------------------------- | -------------------------------------------------- |
| **Purpose**          | Pass data from parent to child components.                 | Store and manage data within a component.          |
| **Mutability**       | **Immutable** — cannot be modified by the child component. | **Mutable** — can be updated within the component. |
| **Where it’s used**  | Passed down from parent to child component.                | Managed and used within a single component.        |
| **Update Mechanism** | Props are updated by the parent component.                 | State is updated using `setState` or `useState`.   |
| **Access**           | Accessed as arguments inside the component function.       | Accessed directly from the state variable.         |
### **When to Use Props vs State**

- **Use Props** when:
    - You need to pass data from a parent component to a child component.
    - The data does not change or needs to be shared between components.
- **Use State** when:
    - You need to store and modify local data within a component (e.g., form inputs, counters, etc.).
    - You need to track **dynamic changes** in the component.


Example for both:
```jsx
import React, { useState } from 'react';

function Person({ name, age }) {
  const [isHappy, setIsHappy] = useState(true);

  return (
    <div>
      <h1>{name} is {age} years old.</h1>
      <p>{isHappy ? "Happy" : "Not Happy"}</p>
      <button onClick={() => setIsHappy(!isHappy)}>Toggle Happiness</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Person name="Alice" age={25} />  {/* Passing props to Person component */}
      <Person name="Bob" age={30} />    {/* Passing props to Person component */}
    </div>
  );
}
```

### **Summary**

- **Props**: Used to pass data from a parent to a child component. Props are immutable (read-only).
- **State**: Used to store and manage data that changes within a component. State is mutable and can be updated using `useState`.


Questions

Q. Can we send state as props?
A. [[State as Props]]

Q. Can we send a function as a prop?