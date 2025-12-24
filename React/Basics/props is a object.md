### Do You Need props.?

- **Yes**, if you use a function parameter:  
    - When you define the child component as function Child(props), props is the object containing all passed props (like onButtonClick).      
    - You access it with props.onButtonClick.  
- **No**, if you destructure props:  
    - You can destructure the props in the parameter, like function Child({ onButtonClick }), and then use onButtonClick directly without props..


### Which Should You Use?

- **props.**: Simple, explicit, good for beginners or when you’re passing many props.
- **Destructuring**: Cleaner, less typing, common in modern React code when you know which props you need.


- **Yes**: In React, props is an object that holds all the properties (data, functions, etc.) passed from a parent component to a child component.
- **What’s Inside**: Key-value pairs where the keys are the prop names (e.g., onButtonClick) and the values are what you pass (e.g., handleClick).
	
### Quick Facts

- props is always an object, even if you pass one prop or none (it’d be empty: {}).
- React automatically creates this object from the attributes you set on the component (e.g., <Child onButtonClick={handleClick} />).