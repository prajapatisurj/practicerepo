# React useEffect Hook

## Overview

The `useEffect` hook allows functional components to perform side effects, replacing lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.

## Key Points

- Runs after render is committed to the screen
- Basic syntax: `useEffect(() => { /* effect code */ }, [dependencies])`
- Can return a cleanup function to prevent memory leaks
- Controls when side effects run in the component lifecycle

## Dependency Array Patterns

|Dependency Array|Behavior|
|---|---|
|`[]`|Runs once after initial render only|
|Omitted|Runs after every render|
|`[a, b]`|Runs when any dependency changes|

## Common Use Cases
- Data fetching
- Subscriptions
- DOM manipulations
- Logging
- Timers and intervals

## Examples

```javascript
// Run once on mount
useEffect(() => {
  console.log('Component mounted');
  
  // Optional cleanup function
  return () => {
    console.log('Component will unmount');
  };
}, []);

// Run when dependency changes
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]);

// Run after every render
useEffect(() => {
  console.log('Component updated');
});

// API data fetching example
useEffect(() => {
  let isMounted = true;
  
  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    
    if (isMounted) {
      setData(data);
    }
  };
  
  fetchData();
  
  return () => {
    isMounted = false;
  };
}, [url]);
```

## Common Mistakes

- Missing dependencies
- Adding unnecessary dependencies
- Infinite render loops
- Not cleaning up subscriptions

## Best Practices

- Keep effects focused on a single responsibility
- Extract complex logic into custom hooks
- Always include all dependencies that the effect uses
- Use cleanup functions to prevent memory leaks