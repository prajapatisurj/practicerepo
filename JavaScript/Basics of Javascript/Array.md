# JavaScript Arrays - Complete Reference

## Basic Array Operations

### Creating Arrays

- Using array literal (preferred):
    
    ```javascript
    const fruits = ['apple', 'banana', 'orange'];
    ```
    
- Using the Array constructor:
    
    ```javascript
    const numbers = new Array(1, 2, 3, 4);
    ```
    
- Creating an empty array:
    
    ```javascript
    const emptyArray = [];
    ```
    
- Array with predefined length:
    
    ```javascript
    const presetLength = new Array(5); // Creates array with 5 empty slots
    ```
    

### Accessing Array Elements

- Zero-based indexing:
    
    ```javascript
    const first = fruits[0]; // 'apple'const last = fruits[fruits.length - 1]; // 'orange'
    ```
    
- Accessing non-existent elements returns `undefined`:
    
    ```javascript
    const nonExistent = fruits[10]; // undefined
    ```
    

### Modifying Arrays

- Changing an element:
    
    ```javascript
    fruits[1] = 'pear'; // Changes 'banana' to 'pear'
    ```
    
- Adding an element to the end:
    
    ```javascript
    fruits.push('mango'); // Returns new length
    ```
    
- Adding an element to the beginning:
    
    ```javascript
    fruits.unshift('kiwi'); // Returns new length
    ```
    
- Removing the last element:
    
    ```javascript
    const lastFruit = fruits.pop(); // Returns removed element
    ```
    
- Removing the first element:
    
    ```javascript
    const firstFruit = fruits.shift(); // Returns removed element
    ```
    

### Array Properties

- `length`: Number of elements
    
    ```javascript
    const length = fruits.length; // 3
    ```
    
- Manually changing length can truncate array:
    
    ```javascript
    fruits.length = 2; // Truncates to ['apple', 'banana']
    ```
    

## Array Methods

### Transformation Methods

#### map()

- Creates a new array by transforming each element:
    
    ```javascript
    const numbers = [1, 2, 3, 4];const doubled = numbers.map(num => num * 2); // [2, 4, 6, 8]
    ```
    

#### filter()

- Creates a new array with elements that pass a test:
    
    ```javascript
    const filtered = numbers.filter(num => num > 2); // [3, 4]
    ```
    

#### reduce()

- Reduces array to a single value by applying a function:
    
    ```javascript
    const sum = numbers.reduce((total, num) => total + num, 0); // 10
    ```
    

#### flatMap()

- Maps each element and flattens the result:
    
    ```javascript
    const arr = [1, 2, 3];const flatMapped = arr.flatMap(x => [x, x * 2]); // [1, 2, 2, 4, 3, 6]
    ```
    

### Search Methods

#### find()

- Returns the first element that satisfies a condition:
    
    ```javascript
    const found = numbers.find(num => num > 2); // 3
    ```
    

#### findIndex()

- Returns the index of first element that satisfies a condition:
    
    ```javascript
    const foundIndex = numbers.findIndex(num => num > 2); // 2
    ```
    

#### indexOf() / lastIndexOf()

- Find index of an element:
    
    ```javascript
    const index = fruits.indexOf('banana'); // 1const lastIndex = fruits.lastIndexOf('banana'); // Last occurrence
    ```
    

#### includes()

- Checks if an array contains a certain element:
    
    ```javascript
    const hasApple = fruits.includes('apple'); // true
    ```
    

#### some() / every()

- Tests if some/all elements pass a test:
    
    ```javascript
    const hasEven = numbers.some(num => num % 2 === 0); // trueconst allPositive = numbers.every(num => num > 0); // true
    ```
    

### Modification Methods

#### splice()

- Add/remove elements anywhere in the array:
    
    ```javascript
    // Syntax: array.splice(start, deleteCount, item1, item2, ...)fruits.splice(1, 1, 'pear', 'grape'); // Remove 1 item at index 1, insert 'pear' and 'grape'
    ```
    

#### slice()

- Extract a portion of an array (non-destructive):
    
    ```javascript
    const sliced = fruits.slice(1, 3); // Extract from index 1 to 2
    ```
    

#### concat()

- Merge two or more arrays:
    
    ```javascript
    const combined = fruits.concat(['pineapple', 'watermelon']);
    ```
    

#### fill()

- Fill array with static value:
    
    ```javascript
    const filledArray = new Array(3).fill('X'); // ['X', 'X', 'X']
    ```
    

### Iteration Methods

#### forEach()

- Execute a function on each element:
    
    ```javascript
    fruits.forEach((fruit, index) => {  console.log(`${index}: ${fruit}`);});
    ```
    

#### entries() / keys() / values()

- Get iterators for key-value pairs, keys, or values:
    
    ```javascript
    for (const [index, value] of fruits.entries()) {  console.log(`${index}: ${value}`);}
    ```
    

### Order Methods

#### sort()

- Sort array elements (modifies original array):
    
    ```javascript
    fruits.sort(); // Alphabetical sorting// Custom sort (numbers)numbers.sort((a, b) => a - b); // Ascendingnumbers.sort((a, b) => b - a); // Descending
    ```
    

#### reverse()

- Reverses array elements (modifies original array):
    
    ```javascript
    fruits.reverse();
    ```
    

### Flattening Methods

#### flat()

- Creates a new array with all sub-array elements concatenated:
    
    ```javascript
    const nested = [1, [2, 3], [4, [5, 6]]];const flattened = nested.flat(); // [1, 2, 3, 4, [5, 6]]const deepFlattened = nested.flat(2); // [1, 2, 3, 4, 5, 6]
    ```
    

### String Conversion

#### join()

- Converts array to string with specified separator:
    
    ```javascript
    const fruitString = fruits.join(', '); // "apple, banana, orange"
    ```
    

#### toString()

- Converts array to comma-separated string:
    
    ```javascript
    const str = fruits.toString(); // "apple,banana,orange"
    ```
    

## Advanced Array Techniques

### Array Destructuring

- Extract array values into variables:
    
    ```javascript
    const [first, second, ...rest] = fruits;
    ```
    

### Spread Operator

- Copy arrays:
    
    ```javascript
    const fruitsCopy = [...fruits];
    ```
    
- Combine arrays:
    
    ```javascript
    const combined = [...fruits, ...numbers];
    ```
    

### Array.from()

- Create arrays from array-like or iterable objects:
    
    ```javascript
    const arrayFromStr = Array.from('hello'); // ['h', 'e', 'l', 'l', 'o']// With mapping functionconst mapped = Array.from([1, 2, 3], x => x * 2); // [2, 4, 6]
    ```
    

### Array.of()

- Create an array from arguments:
    
    ```javascript
    const arr = Array.of(1, 2, 3); // [1, 2, 3]
    ```
    

### Array.isArray()

- Check if an object is an array:
    
    ```javascript
    const isArray = Array.isArray(fruits); // true
    ```
    

## Array Performance Considerations

- Avoid using `delete` on arrays (creates "holes"):
    
    ```javascript
    delete fruits[1]; // Bad practice, use splice instead
    ```
    
- For large arrays, consider using:
    - `for` loop for best performance
    - Typed arrays (Uint8Array, Float64Array) for numeric data
    - Set for unique value collections
- Preallocate array size when possible

## Multidimensional Arrays

- JavaScript supports nested arrays:
    
    ```javascript
    const matrix = [  [1, 2, 3],  [4, 5, 6],  [7, 8, 9]];const value = matrix[1][2]; // 6
    ```
    

## Typed Arrays (for binary data)

- Used for handling binary data:
    
    ```javascript
    const int8Array = new Int8Array(4); // Array of 8-bit integers with length 4const float32Array = new Float32Array([1.1, 2.2, 3.3]); // Float32 array from values
    ```
    

## Array Methods for Functional Programming

- Arrays support functional programming patterns:
    
    ```javascript
    const data = [1, 2, 3, 4, 5];// Chain methods togetherconst result = data  .filter(x => x % 2 === 0)  .map(x => x * x)  .reduce((sum, x) => sum + x, 0); // 20
    ```
<!-- map, filter,forEach,reduce -->

const arr=[2,3,5,4,6,7,8]
<!-- 35 -->




