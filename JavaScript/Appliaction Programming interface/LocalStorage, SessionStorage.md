Both **LocalStorage** and **SessionStorage** are part of the **Web Storage API** and allow you to **store data in the user's browser**. However, there are key differences in how long the data is stored and how it behaves.



### **LocalStorage**

- **Persistent Storage**: Data is stored **indefinitely** (until it is manually cleared by the user or via JavaScript).
- **Scope**: Data is accessible **across different browser tabs** and **windows** from the same origin (domain).
- **Capacity**: Can store up to **5MB** per domain (varies by browser).

**When to use LocalStorage?**

- When you want data to persist even after the user closes the browser (e.g., saving user preferences, themes, etc.).




### **SessionStorage**

- **Temporary Storage**: Data is only available for the duration of the **page session** (until the browser tab is closed).
- **Scope**: Data is only accessible **within the same tab** or **window**. If you open a new tab or window, it doesn't have access to the data.
- **Capacity**: Similar to LocalStorage, it can store up to **5MB** of data per domain.


**When to use SessionStorage?**
- When you need to store data only **for the duration of the session**, like user login status for a single session or a temporary form submission.

### **Key Differences**

| **Feature**       | **LocalStorage**                           | **SessionStorage**                       |
| ----------------- | ------------------------------------------ | ---------------------------------------- |
| **Persistence**   | Persistent (until cleared)                 | Only for the current session             |
| **Scope**         | Available across tabs/windows              | Available only in the same tab           |
| **Data Capacity** | Around 5MB per domain                      | Around 5MB per domain                    |
| **Use Case**      | Long-term storage (e.g., user preferences) | Temporary storage (e.g., one-time login) |
|                   |                                            |                                          |

### **Real-Life Example**:

- **LocalStorage**: Saving user preferences for a dark/light theme (even after the browser is closed).
- **SessionStorage**: Storing a user’s session data when they are logged in, but removing it when they close the tab.
### **Summary**

- **LocalStorage** is for **long-term** storage that persists across sessions and tabs.
- **SessionStorage** is for **temporary** storage that only lasts for the duration of the page session (until the tab is closed).
