
Hooks are **functions** that let you use React **state and lifecycle features** inside functional components **without needing class components**.

## **1️⃣ Why Hooks?**

Before React Hooks, we had to use **class components** to manage state and lifecycle methods (`componentDidMount`, `componentDidUpdate`, etc.). Hooks allow us to d+o this **inside functional components**, making React code **simpler and more readable**.


## **2️⃣ Commonly Used Hooks**

| Hook          | Purpose                                                |
| ------------- | ------------------------------------------------------ |
| `useState`    | Manages component state                                |
| `useEffect`   | Runs side effects (e.g., fetching data, subscriptions) |
| `useContext`  | Shares state without props drilling                    |
| `useRef`      | Creates a reference to DOM elements or variables       |
| `useReducer`  | Manages complex state logic                            |
| `useMemo`     | Optimizes performance by memoizing values              |
| `useCallback` | Memoizes functions for better performance              |


## **3️⃣ useEffect (For Side Effects)**

`useEffect` runs **code after rendering**, useful for:

- Fetching data from APIs 📡
- Updating the DOM 🖼️
- Setting up event listeners 🎧

```jsx
import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup when unmounted
  }, []); // Empty dependency array → Runs only once

  return <p>Timer: {seconds} sec</p>;
}
export default Timer;
```

Use localStorage for saving  
[[LocalStorage, SessionStorage]]

```jsx
useEffect(() => {

    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      console.log("Retrieved from localStorage:", JSON.parse(savedTasks));
      setTaskList(JSON.parse(savedTasks)); // Restore tasks from localStorage
    }
  }, []); // Runs only once on mount

  useEffect(() => {
    // Only save if we have tasks or if we're intentionally clearing (by checking if component has mounted)
    if (taskList.length > 0) {
      console.log("Saving to localStorage:", taskList);
      localStorage.setItem("tasks", JSON.stringify(taskList));
    }
  }, [taskList]);



//Better approach save empty tasks but not in first mount
const hasMounted = useRef(false);

useEffect(() => {
  if (hasMounted.current) {
    console.log("Saving to localStorage:", taskList);
    localStorage.setItem("tasks", JSON.stringify(taskList));
  } else {
    hasMounted.current = true;
  }
}, [taskList]);

```
## **4️⃣ useContext (Avoiding Props Drilling)**

Instead of **passing props manually** at every level, `useContext` allows us to **share data across multiple components**.

```jsx
import React, { createContext, useContext } from 'react';

const UserContext = createContext();  // Creating context

function DisplayUser() {
  const user = useContext(UserContext);  // Accessing context value
  return <h2>User: {user}</h2>;
}

function App() {
  return (
    <UserContext.Provider value="Alice"> {/* Providing context value */}
      <DisplayUser />
    </UserContext.Provider>
  );
}

export default App;

```
✔ No need to **pass `user` prop manually**.  
✔ `useContext(UserContext)` **accesses context directly**.


## **🔥 Conclusion**

- Hooks **simplify** React by eliminating the need for **class components**.
- **State & side effects** are now easier to handle inside functional components.
- Performance optimization hooks like `useMemo` and `useCallback` help in **avoiding unnecessary re-renders**.