JSX is a **syntax extension for JavaScript** that allows us to **write HTML inside JavaScript**. It makes writing React components easier and more readable.

1️⃣ Why Use JSX?

✔ **Easier to write & understand** (looks like HTML).  
✔ **Prevents `document.createElement()` & `appendChild()` mess**.  
✔ **Helps React understand UI structure better**.


2️⃣ JSX Example
✅ Instead of writing JavaScript like this:
```js
const element = React.createElement("h1", {}, "Hello, JSX!");
```
😵 Looks complex, right?

✅ We use JSX to make it simpler:
```jsx
const element = <h1>Hello, JSX!</h1>;
```
😃 Much cleaner and readable!

3️⃣ JSX Rules to Remember

1. **Return a Single Parent Element**
2.  **Use `className` Instead of `class`**
3. **Self-Closing Tags Required for Single Elements**
4.  **Use `{}` for JavaScript Expressions**


```jsx
// 1️⃣ Return a Single Parent Element
function SingleParentExample() {
  return (
    <div>
      <h1>Hello</h1>
      <p>Welcome to React</p>
    </div>
  );
}

// 2️⃣ Use className Instead of class
function ClassNameExample() {
  return <p className="text">Hello</p>;  // ✅ Correct, using className
}

// 3️⃣ Use { } for JavaScript Expressions
function JavaScriptExpressions() {
  const name = "John";
  return <h1>Hello, {name}!</h1>;  // ✅ Works! Displays: Hello, John!
}

// 4️⃣ Self-Closing Tags for Single Elements
function SelfClosingExample() {
  return <img src="logo.png" alt="Logo" />;  // ✅ Correct, self-closing tag
}

// Combining All Rules in a Simple Example
function Greeting() {
  const name = "Alice";
  return (
    <div>
      <h1>Hello, {name}!</h1>  {/* Displays: Hello, Alice! */}
      <p className="greeting">Welcome to React</p>
      <img src="logo.png" alt="Logo" />
    </div>
  );
}

```