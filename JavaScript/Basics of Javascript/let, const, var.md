Key Differences
![[let, const, var key difference.png]]

Var **Hoisted** moved to the top of its scope with `undefined` as its initial value
example:
console.log(a); // undefined (hoisted) var a = 5;

Let Hoisted  but not initialized with any value same with const.

Function scoped vs Block scoped

- cannot redeclare in block for let and const
