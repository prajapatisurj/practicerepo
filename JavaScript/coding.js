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

// console.log(result);

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

function permuation(str) {
  let res = [];
  function permute(curr, remaining) {
    if (remaining.length === 0) {
      res.push(curr);
      return;
    }
    for (let i = 0; i < remaining.length; i++) {
      permute(
        curr + remaining[i],
        remaining.slice(0, i) + remaining.slice(i + 1)
      );
    }
  }
  permute("", str);
  return res;
}

console.log(permuation("xy"));
