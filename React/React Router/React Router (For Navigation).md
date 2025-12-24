

React Router is a **library** that allows us to navigate between different pages (or components) in a React app **without reloading the page**. 🚀

#### **🔹 Why Do We Need React Router?**

By default, React is a **single-page application (SPA)**, meaning it loads a single HTML page and dynamically updates the content.  
Without React Router:  
❌ Clicking a link **reloads the entire page**.  
✅ With React Router, navigation happens **instantly** without a full page refresh.

- **Only one `index.html` exists** (no real separate pages).
- React Router **changes the URL and updates the content dynamically** **without reloading**.
- This makes navigation **faster** and gives a smoother user experience.

```nginx
npm install react-router-dom
```
### **📜 Steps to Use React Router**

1. Import `BrowserRouter`, `Routes`, and `Route` from `react-router-dom`.
2. Define different pages/components (`Home`, `About`, `Contact`).
3. Use `<Routes>` and `<Route>` to define paths.
4. Use `<Link>` or `<NavLink>` instead of `<a>` for navigation.


#### **Full Example**
```jsx 
// 📂 src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Components for pages
function Home() {
  return <h2>🏠 Welcome to Home Page</h2>;
}

function About() {
  return <h2>ℹ️ About Us</h2>;
}

function Contact() {
  return <h2>📞 Contact Us</h2>;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> |  
        <Link to="/about">About</Link> |  
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

```


## **Key Concepts**

| Feature                                        | Description                                                   |
| ---------------------------------------------- | ------------------------------------------------------------- |
| **`<BrowserRouter>`**                          | Wraps the entire app and enables routing.                     |
| **`<Routes>`**                                 | Contains all route definitions.                               |
| **`<Route path="/" element={<Component />}>`** | Defines a route (which component to show for a specific URL). |
| **`<Link to="/about">About</Link>`**           | Used for navigation (prevents full page reload).              |
| **`<NavLink>`**                                | Similar to `<Link>`, but adds an `active` class for styling.  |


## **Redirecting & Not Found (404) Page**

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="*" element={<h2>404 Not Found 🚫</h2>} />
</Routes>

```

✔ `path="*"` matches any unknown URL and shows a **404 Not Found** page.



## **Dynamic Routing (URL Parameters)**

We can pass **dynamic values** in the URL using `:param`.

```jsx
import { useParams } from "react-router-dom";

function UserProfile() {
  const { username } = useParams();
  return <h2>👤 Profile of {username}</h2>;
}

// In Routes:
<Route path="/user/:username" element={<UserProfile />} />
// Now "/user/John" will show "👤 Profile of John"
```

## **🚀 Summary**

✔ **React Router enables navigation in React apps without page reloads.**  
✔ Uses `<Routes>` and `<Route>` to define paths.  
✔ Uses `<Link>` and `<NavLink>` for navigation (instead of `<a>`).  
✔ Handles **dynamic URLs** with `useParams()`.  
✔ Supports **404 pages** using `path="*"`.



[[Single Page Application Vs Multi page Application]]