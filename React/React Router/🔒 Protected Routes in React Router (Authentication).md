
## **✅ Steps to Create Protected Routes**

1. **Create an `AuthContext` for Managing Authentication**
2. **Create a `ProtectedRoute` Component**
3. **Wrap Private Routes with `ProtectedRoute`**

---

## **1️⃣ Setup `AuthContext` (Manages Authentication State)**

**This context provides login/logout functionality.**

```jsx
// AuthContext.js
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = (username) => {
    setUser(username);
    navigate("/dashboard"); // Redirect after login
  };

  const logout = () => {
    setUser(null);
    navigate("/"); // Redirect to home after logout
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
```

---

## **2️⃣ Create a `ProtectedRoute` Component**

**Restricts access to certain routes if the user is not logged in.**

```jsx
// ProtectedRoute.js
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

function ProtectedRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
```

---

## **3️⃣ Setup Routes in `App.js`**

**Wrap protected pages inside `<ProtectedRoute>`.**

```jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import Home from "./Home";
import Login from "./Login";
import Dashboard from "./Dashboard";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* Protected Route (Only logged-in users can see Dashboard) */}
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
```

---

## **4️⃣ Create `Login.js` (Login Page)**

**Allows users to log in.**

```jsx
import { useAuth } from "./AuthContext";

function Login() {
  const { login } = useAuth();

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={() => login("User123")}>Login</button>
    </div>
  );
}

export default Login;
```

---

## **5️⃣ Create `Dashboard.js` (Protected Page)**

**This page is only accessible if logged in.**

```jsx
import { useAuth } from "./AuthContext";

function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div>
      <h2>Welcome, {user}!</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Dashboard;
```

---

## **🔍 Final Behavior**

✅ Visiting `/dashboard` without login → Redirects to `/login`  
✅ Logging in → Redirects to `/dashboard`  
✅ Logging out → Redirects to `/` (Home Page)

Now you have **protected routes** working in React Router! 🔐🔥  
Let me know if you need any modifications! 🚀