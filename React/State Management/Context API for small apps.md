- **What**: A React feature to pass data through the component tree without props drilling.
- **Why**: Useful for small apps to share data (e.g., themes, user info) across components without prop passing.
- **When**: Ideal for small apps with a few components needing shared state, avoiding prop-heavy structures.

The Context API is a built-in React feature that provides a way to pass data through the component tree without having to pass props manually at every level. It's particularly useful for sharing global or semi-global state in smaller applications.
#### How It Works

- **Steps**:
    1. Create a context with React.createContext().
    2. Provide the context value using Context.Provider.
    3. Consume the context in components with useContext or Context.Consumer.


## Core Components of Context

1. **Context Creation**

```jsx
import React, { createContext, useState, useContext } from 'react';

// Create a context
const ThemeContext = createContext();

// Create a provider component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

1. **Context Usage**

```jsx
function App() {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
}

function MainContent() {
  // Use the context hook to access theme
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={`app-${theme}`}>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </div>
  );
}
```

## When to Use Context API

### Ideal Use Cases

- Theming
- User authentication state
- Language/internationalization settings
- Application-wide preferences
- Sharing data that needs to be accessible by many components

### When to Avoid Context API

- Frequently changing, high-frequency updates
- Complex state management
- Large-scale applications (consider Redux or MobX)

## Advanced Context Pattern: Combining Reducer with Context

```jsx
import React, { createContext, useReducer, useContext } from 'react';

// Reducer function
function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
    case 'TOGGLE_TODO':
      return state.map(todo => 
        todo.id === action.payload 
          ? { ...todo, completed: !todo.completed } 
          : todo
      );
    default:
      return state;
  }
}

// Create context with useReducer
function TodoProvider({ children }) {
  const [todos, dispatch] = useReducer(todoReducer, []);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}

// Custom hook for using todo context
function useTodos() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodos must be used within a TodoProvider');
  }
  return context;
}
```

## Best Practices

1. **Create Separate Context Files**
    
    - Organize contexts in their own files
    - Use custom hooks for context consumption
2. **Avoid Overusing Context**
    
    - Use context only when prop drilling becomes cumbersome
    - Keep context providers as close to needed components as possible
3. **Performance Considerations**
    
    - Context re-renders all consumers when its value changes
    - Use `useMemo` or `useCallback` to memoize context values
    - Split contexts to minimize unnecessary re-renders

## Performance Optimization Example

```jsx
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  // Memoize the context value
  const value = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
```

## Limitations

- Not a complete state management solution for large apps
- Less performant for frequent updates
- Can make component reuse more difficult
- Requires careful design to avoid prop drilling alternative

## Alternative Approaches for Small Apps

- React's `useState` and prop drilling
- Context API
- Light-weight state management libraries like Zustand
- React Query for server state management