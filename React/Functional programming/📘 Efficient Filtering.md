#important #best_practices
That approach is often called **"decomposing conditions"** or **"guard clause filtering"**, and it's a clean way to:

### 🔹 Break complex logic into readable parts:

Instead of cramming everything into one big `if` or `return`, it separates each filter into its own **logical unit** like `categoryMatch`, `statusMatch`, etc.

```jsx
const isMatch = condition1 && condition2 && condition3;

```

This is just a clean pattern often used in:

- Functional programming
- React filtering logic
- Declarative style coding

```jsx
const filteredTasks = tasks.filter((task) => {

    const categoryMatch =activeCategory === "All" || task.category === activeCategory;
    
  const statusMatch =filter === "all"
      ? true
      : filter === "completed"
      ? task.completed
      : !task.completed;
      
  return categoryMatch && statusMatch;
  });
```

### 🧠 Why it’s useful:

- Easy to **add more filters** later (e.g. `priorityMatch`, `dueDateMatch`)
- Much more **readable** than nested `if-else`
- Promotes **modular logic**, which is easier to test or debug