
## Basics
- **What**: Data that changes over time, managed with `useState` in functional components.
- **Why**: Enables dynamic UI updates based on interactions or data.
- **Main Tool**: `useState` hook.

## Using `useState`
- **Syntax**: `const [state, setState] = useState(initialValue)`.
- **How It Works**: 
  - `state`: Current value.
  - `setState`: Updates state, triggering re-render.
- **Code**:

```jsx
function Counter() {
    const [count, setCount] = useState(0);
    function handleClick() { setCount(count + 1); }
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={handleClick}>Increment</button>
      </div>
    );
  }
```
#### Key Points

- **Initialization**: useState(initialValue) sets the starting value (e.g., 0, '', or an object).
- **Updating**: Use setCount(newValue) to change state; React batches updates for performance.
- **Rules**:
    - Only call useState at the top level of a functional component.
    - Don’t modify state directly (e.g., count++); use the setter.

#### Multiple States

- Use multiple useState calls for different pieces of state.

**Code**:

```jsx
function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
    </div>
  );
}
```


#### Best Practices

- Keep state minimal and specific (e.g., split into multiple states if unrelated).
- Use objects or arrays for complex state, updating with spread operators or immutability.

### Connection to Event Handling

- State often pairs with event handlers (e.g., onClick, onChange) to update UI dynamically, as shown in the examples above.