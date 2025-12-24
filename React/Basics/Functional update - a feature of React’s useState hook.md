**Functional update** is a powerful built-in feature of React’s `useState` setter that lets you safely update state using the **most recent value**, especially inside asynchronous functions or closures.



```jsx
const [count, setCount] = useState(0);

// This is a functional update ⬇️
setCount(prev => prev + 1);

```

### 📦 Why did React give us this feature?

Because sometimes, especially in **async functions** like:

- `setInterval`
    
- `setTimeout`
    
- `fetch` calls
    
- `onClick`, etc.
    

…the value of your state **might be outdated** (aka stale).  
React lets you use the **latest value** by doing:

```jsx
setState(latestValue => updatedValue)`
```

This ensures that even if you’re inside an old closure, you always work with the freshest state.