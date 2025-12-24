

### Event Handlers as Props

- **What**: Pass event handler functions from parent to child via props
- **Purpose**: Lets the parent control what happens when an event occurs in the child
- **How**:  
    - Parent passes the handler as a props
    - Child uses it in an event (e.g., onClick).

```jsx
// Parent Component
function Parent() {
  function handleClick() {
    alert('Clicked from Parent!');
  }
  return <Child onButtonClick={handleClick} />;
}

// Child Component
function Child(props) {
  return <button onClick={props.onButtonClick}>Click Me</button>;
}
```

with arguments:
```jsx
// Parent Component
function Parent() {
  function handleClick(message) {
    alert(message);
  }
  return <Child onButtonClick={() => handleClick('Hello!')} />;
}

// Child Component
function Child(props) {
  return <button onClick={props.onButtonClick}>Click Me</button>;
}
```
### Key Points

- Pass the function reference (handleClick), not a call (handleClick()).
- Use arrow functions for arguments in the parent.
- Child triggers the prop function when the event happens.



### What is onButtonClick in code?

  
- **onButtonClick**: It’s a custom prop name you define when passing data (in this case, a function) from the parent to the child component.
- **Value**: {handleClick} is the event handler function defined in the parent, passed as the value of the onButtonClick prop.
- **Purpose**: It allows the child component to trigger handleClick (from the parent) when an event (like a button click) occurs in the child.

- onButtonClick isn’t a built-in React event—it’s just a prop name you chose (could be handleBtn, clickHandler, etc.).
- It’s a function reference, so the child can call it like onButtonClick() or pass it directly to onClick.
### How It Works

1. **Parent**: Defines handleClick and passes it to Child as the onButtonClick prop.
2. **Child**: Receives onButtonClick as a function and attaches it to the button’s onClick event.
3. **Result**: When the button is clicked, handleClick runs in the parent’s context, showing the alert.

[[props is a object]]