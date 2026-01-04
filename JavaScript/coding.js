// // count repeatation numbers
// const result = {
//   numbers: {},
//   negitive: {},
//   str: {},
// };
// arr.forEach((item) => {
//   if (typeof item == "number") {
//     result.numbers[item] = (result.numbers[item] || 0) + 1;
//     if (item < 0) {
//       result.negitive[item] = (result.negitive[item] || 0) + 1;
//     }
//   }
//   if (typeof item == "string") {
//     result.str[item] = (result.str[item] || 0) + 1;
//   }
// });

// console.log(result);class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError(error) {
//     return { hasError: true };
//   }

//   componentDidCatch(error, info) {
//     console.log("Error:", error);
//     console.log("Info:", info);
//   }
//   render() {
//     if (this.state.hasError) {
//       return <h1>Something went wrong.</h1>;
//     }
//     return this.props.children;
//   }
// }

// export default ErrorBoundary;

// // is pailndrome

// function isPail(num) {
//   if (num <= 1) return false;
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i == 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPail(4));

// // is uniq number

// let data = [2, 3, 4, 6, 1, 3, 4, 6, 2];
// function isDuplicate(arr) {
//   let duplicate = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (duplicate.indexOf(arr[i]) == -1) {
//       duplicate.push(arr[i]);
//     }
//   }
//   return duplicate;
// }

// console.log(isDuplicate(data));

// let repeatNum = {
//   arr: {},
//   str: {},
//   neg: {},
// };
// arr.forEach((item) => {
//   if (typeof item == "number") {
//     repeatNum.arr[item] = (repeatNum.arr[item] || 0) + 1;
//     if (item < 0) {
//       repeatNum.neg[item] = (repeatNum.neg[item] || 0) + 1;
//     }
//   }
//   if (typeof item == "string") {
//     repeatNum.str[item] = (repeatNum.str[item] || 0) + 1;
//   }
// });

// console.log(repeatNum);

// // total sum

// // i have 1  arr

// function totalSum(arr) {
//   console.log("first call", arr);
//   let total = 0;
//   while (arr > 0) {
//     console.log("second  call", arr);
//     let lastDigit = arr % 10;
//     total += lastDigit;
//     arr = Math.floor(arr / 10);
//   }
//   return total;
// }
// console.log("suraj");
// let newArr = [2, 3, 5, 6, 7, 9, 10];
// console.log(totalSum(newArr));

// function issum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }
// console.log(issum([2, 3, 4, 5, 6]));

// function revStr(){
//   let rev=''
//   for(let i=str.length-1;i>=0;i--){
//     rev+=str[i]
//   }
//   return rev;
// }

// let str='test'
// console.log(revStr(str))

// function sumNaturalNumbers(n) {
//   return (n * (n + 1)) / 2;
// }
// console.log(sumNaturalNumbers(10)); // 55

// function sumNaturalNumbers(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(sumNaturalNumbers(10)); // 55

// function permuation(str) {
//   let res = [];
//   function permute(curr, remaining) {
//     if (remaining.length === 0) {
//       res.push(curr);
//       return;
//     }
//     for (let i = 0; i < remaining.length; i++) {
//       permute(
//         curr + remaining[i],
//         remaining.slice(0, i) + remaining.slice(i + 1)
//       );
//     }
//   }
//   permute("", str);
//   return res;
// }

// console.log(permuation("xy"));

// import React, { useState, useCallback } from 'react';

// export default function App() {
//   const [state, setState] = useState(true);

//   const greet = useCallback(() => {
//     console.log('Good Morning');
//   }, []);

//   return (
//     <div className="App">
//       <h1>I am Parent.</h1>
//       <button onClick={() => setState(!state)}>Toggle State</button>
//       <Test greet={greet} />
//     </div>
//   );
// }

// const Test = React.memo((props) => {
//   console.log('Child re-rendered');

//   return (
//     <>
//       <h2>I am Child</h2>
//       <button onClick={props.greet}>Greet</button>
//     </>
//   );
// });
// import React, { useState } from 'react';

// export default function App(props) {
//   const [state, setState] = useState(true);
//   const greet = () => console.log('Good Morning');
//   return (
//     <div className="App">
//       <h1>I am Parent.</h1>
//       <button onClick={() => setState(!state)}>Toggle State</button>
//       <Test greet={greet} />
//     </div>
//   );
// }

// const Test = (props) => {
//   console.log('Child re-rendered');

//   return (
//     <>
//       <h2>I am Child</h2>
//       <button onClick={props.greet}>Greet</button>
//     </>
//   );
// };

// didCatch method in react component
// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError(error) {
//     return { hasError: true };
//   }

//   componentDidCatch(error, info) {
//     console.log("Error:", error);
//     console.log("Info:", info);
//   }
//   render() {
//     if (this.state.hasError) {
//       return <h1>Something went wrong.</h1>;
//     }
//     return this.props.children;
//   }
// }

// export default ErrorBoundary;

// const mainObj = {
//   name: "suraj",
//   address: { city: "delhi" },
// };

// let shallowCopy = { ...mainObj };
// let deepCopy = JSON.parse(JSON.stringify(mainObj));
// mainObj.address.city = "kailaras";

// deep copy

// {/* <></> vs react fragment */}
// explain the difference between using <> </> and <React.Fragment></React.Fragment>

// react fragments allow you to group a list of children without
//  adding extra nodes to the DOM. There are two ways to use fragments 
// in React: the shorthand syntax <> </> and the full syntax <React.Fragment></React.Fragment>.
// <> </> is a shorter way to declare fragments and is more concise.
// However, it does not support key attributes or any other props.
//  This means that if you need to assign a key to a fragment
//  (for example, when rendering a list of items), you must use the full <React.Fragment>

// process.nextTick(() => {
//   console.log('Next Tick Callback');
// });

// Promise.resolve().then(() => {
//   console.log('Promise Callback');
// });

// setTimeout(() => {
//   console.log('SetTimeout Callback');
// }, 0);

// console.log('Main Thread Execution');

// const user={
//     “name”:”Rio”
// };
// !! ??
// user.name=“Tokiyo”
// console.log(user.name)

// async function delay(val,time){
//   return new Promise((resolve)=>{
//       setTimeout(()=>{
//          val
//       },time)
//   })
// }
// console.log(delay(8,2000))

// console.log(delay(5,1000))
// function resolver(){
// console.log("1");
// delay(4000)
// console.log('2')
// delay(2000)
// console.log('3')
// }

// resolver()

// // What will be the output of this code
// console.log('Start'); 1
// setTimeout(() => {
//   console.log('Set Timeout - 1');
//   Promise.resolve().then(() => {
//     console.log('Promise - 1');
//   }).then(() => {
//     console.log('Promise - 2');
//   });
// }, 0);
// setImmediate(() => {
//   console.log('Set Immediate');
// });
// process.nextTick(() => {
//   console.log('Next Tick');
//   process.nextTick(() => console.log('Next Tick - nested'));
// });
// Promise.resolve().then(() => {
//     console.log('Promise - 3'); 3
// })
// console.log('End');2

// //  start,
// end ,
// Next Tick,
// Next Tick - nested
// Promise-3
// Promise - 1

//  what is nullish coalescing operator??
//   The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand. It is useful for providing default values when dealing with potentially null or undefined variables.

// const foo = null ?? 'default string'
// console.log(foo); // Output: 'default string'

// forwardRef in react??
// In React, forwardRef is a function that allows you to pass a ref through a component to one of its child components. This is useful when you want to access the DOM node or a child component's instance from a parent component.

// Here's an example of how to use forwardRef:

// import React, { forwardRef } from 'react';

// const ChildComponent = forwardRef((props, ref) => {
//   return <input ref={ref} type="text" />;
// });

// const ParentComponent = () => {
//   const inputRef = React.useRef(null);

//   const focusInput = () => {
//     if (inputRef.current) {
//       inputRef.current.focus();
//     }
//   };

//   return (
//     <div>
//       <ChildComponent ref={inputRef} />
//       <button onClick={focusInput}>Focus Input</button>
//     </div>
//   );
// };

// export default ParentComponent;

// In this example, the ParentComponent uses forwardRef to pass a ref to the ChildComponent, allowing it to directly access the input element and call the focus method when the button is clicked.

// backwordref in react??
// In React, backwardRef is not a standard term or feature. However, you might be referring to the concept of passing refs from child components back to parent components, which is typically done using callback refs or by lifting state up.

// If you meant "backward compatibility" or something else related to refs, please clarify, and I would be happy to provide more information!

//

// async function test(value) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(value * 2);
//     }, 2000);
//   });
// }

// async function resolver() {
//   console.time("Time required to run this");

//   const a = await test(2);
//   const b = await test(5);
//   const c = await test(8);
//   console.log("SUM", a + b + c);
//   console.timeEnd("Time required to run this");
// }

// resolver();


// async function test(value) {
// return new Promise((resolve, reject) => {
// setTimeout(() => {
// resolve(value * 2);
// }, 2000);
// });
// }
 
 
// async function resolver() {
//   console.time("Time required to run this");

//   const [a, b, c] = await Promise.all([
//     test(2),
//     test(5),
//     test(8)
//   ]);

//   console.log("SUM", a + b + c);
//   console.timeEnd("Time required to run this");
// }

// resolver(); 


// import React, { useState, useEffect } from 'react';

// export default function App() {
//   const [user, setUser] = useState([]);
//   const [filterVal, setFilterVal] = useState([]);
//   const [input, setInput] = useState('');

//   const fetchData = () => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((res) => res.json())
//       .then((data) => {
//         setUser(data), setFilterVal(data);
//       });
//   };
//   useEffect(() => {
//     fetchData();
//   }, []);
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       const allFilerVal = user.filter((item) =>
//         item.name.toLowerCase().includes(input.toLowerCase())
//       );
//       setFilterVal(allFilerVal);
//     }, 500);
//     return () => {
//       clearTimeout(timer);
//     };
//   }, [input, filterVal]);
//   return (
//     <>
//       <input value={input} onChange={(e) => setInput(e.target.value)} />

//       {filterVal.map((item,index)=>(
//         <p>{item.name}</p>
//       ))}
//     </>
//   );
// }
