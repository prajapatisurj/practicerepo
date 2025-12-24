```jsx
// Parent Component
function Parent() {
  const sayHi = () => {
    alert("Hi there!");
  };

  return <Child name="Bob" onGreet={sayHi} />;
}

// Child Component
function Child({ name, onGreet }) {
  return (
    <div>
      <p>Hello, {name}!</p>
      <button onClick={onGreet}>Say Hi</button>
    </div>
  );
}

// Render
ReactDOM.render(<Parent />, document.getElementById('root'));
```

Here’s a concise summary of ways to call the `onGreet` function prop in the `Child` component, perfect for short notes:

---

### Original
```jsx
<button onClick={onGreet}>Say Hi</button>
```
- **Direct**: Calls `onGreet` on click.

---

### Alternatives
1. **Inline Arrow**
   - `<button onClick={() => onGreet()}>`
   - Wraps `onGreet` in arrow function; allows extra logic.

2. **Separate Handler**
   - `const handleClick = () => { onGreet(); }; <button onClick={handleClick}>`
   - Local function calls `onGreet`; good for logic.

3. **With Event**
   - `const handleClick = (e) => { onGreet(e); }; <button onClick={handleClick}>`
   - Passes event object to `onGreet`.

4. **With Arguments**
   - `const handleClick = () => { onGreet("Hi!"); }; <button onClick={handleClick}>`
   - Calls `onGreet` with custom data.

5. **Conditional**
   - `const handleClick = () => { if (condition) onGreet(); }; <button onClick={handleClick}>`
   - Calls `onGreet` only if condition met.

6. **Different Event**
   - `<button onMouseOver={onGreet}>`
   - Triggers `onGreet` on hover, not click.

---

### Notes
- **Syntax**: Always `{onGreet}` to reference, add `()` to call.
- **Use Case**: Direct for simple; handler for logic/args.
- **Weather App**: `onSearch(city)` in `handleSubmit` is like #4.

--- 

Short enough for quick reference! Want to apply one to your app?