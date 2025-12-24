### 📜 React Notes: `addEventListener`, `removeEventListener`, and Lifecycle Cleanup

---

### ✅ What is `addEventListener`?

- A **browser method** used to listen for events like `click`, `scroll`, `keydown`, etc.
    
- Example:
    
    ```js
    document.addEventListener("click", () => {
      console.log("User clicked!");
    });
    ```
    

---

### ✅ Why do we use `removeEventListener`?

- To **stop listening** to the event when it's no longer needed.
    
- Prevents:
    
    - ❌ Memory leaks
        
    - ❌ Event being triggered multiple times
        
    - ❌ Errors when component is no longer visible
        

---

### ♻️ In React: How it works

We use it in `useEffect`, and remove it in the **cleanup function**:

```js
useEffect(() => {
  function handleClick() {
    console.log("clicked");
  }

  document.addEventListener("click", handleClick);

  return () => {
    document.removeEventListener("click", handleClick);
  };
}, []);
```

---

### 💡 Real-Life Example: **Close dropdown on outside click**

#### Problem:

When dropdown is open, clicking outside should close it.

#### Solution:

Use `addEventListener` to listen for outside clicks and remove it during cleanup.

```jsx
const dropdownRef = useRef();

useEffect(() => {
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);
```

---

### 🥪 Why does React run `useEffect` twice in development?

✅ This happens **only in React’s development mode** (not production).

React **intentionally double-invokes** `useEffect` and its cleanup function when using Strict Mode to help you catch bugs.

---

### 🐞 Real-Life Bugs This Helps Catch:

1. **Missing cleanup**: If you forget to remove an event listener, it may stay even after the component is gone.
    
2. **Memory leaks**: Old intervals, timeouts, or listeners keep running in the background.
    
3. **Multiple bindings**: If `addEventListener` is added multiple times without cleanup, the handler runs multiple times.
    
4. **Ghost behavior**: Example: You click outside a modal that’s already unmounted and it still reacts.
    

---

### 🧠 Summary

|Concept|Explanation|
|---|---|
|`addEventListener`|Starts listening to events (e.g. clicks)|
|`removeEventListener`|Stops listening (clean up)|
|`useEffect`|React's lifecycle hook for side effects|
|Cleanup function|Runs when component unmounts or dependency changes|

---

### 🧹 Common "Event Listeners" Problem & Solution

#### ❌ Problem:

> You added an event listener but forgot to clean it up. Now your handler runs multiple times or after the component is gone.

#### ✅ Solution:

> Always clean up listeners inside `useEffect` using `return () => removeEventListener(...)`.