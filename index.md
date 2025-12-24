
###  1. Find the Maximum Sum Subarray (Brute Force)
```js
function maxSubarrayBrute(arr) {
  if (!arr || arr.length === 0) return 0;
  let maxSum = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum > maxSum) maxSum = sum;
    }
  }
  return maxSum;
}
```

---

## 2. Find All Palindromic Substrings
```js
function allPalindromicSubstrings(s) {
  const results = [];
  const n = s.length;
  function isPal(l, r) {
    while (l < r) {
      if (s[l] !== s[r]) return false;
      l++; r--;
    }
    return true;
  }
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (isPal(i, j)) {
        let sub = "";
        for (let k = i; k <= j; k++) sub += s[k];
        results.push(sub);
      }
    }
  }
  return results;
}
```

---

## 3. Two Sum Problem
```js
function twoSum(nums, target) {
  const map = {}; // value -> index
  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];
    if (map[need] !== undefined) return [map[need], i];
    if (map[nums[i]] === undefined) map[nums[i]] = i;
  }
  return null;
}
```

---

## 4. Kadane's Algorithm``
```js
function kadane(arr) {
  if (!arr || arr.length === 0) return 0;
  let maxEndingHere = arr[0];
  let maxSoFar = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (maxEndingHere + arr[i] > arr[i]) {
      maxEndingHere = maxEndingHere + arr[i];
    } else {
      maxEndingHere = arr[i];
    }
    if (maxEndingHere > maxSoFar) maxSoFar = maxEndingHere;
  }
  return maxSoFar;
}
```

---

## 5. Find Missing Number (1..n)
```js
function findMissingNumber(arr) {
  const n = arr.length + 1;
  const expected = (n * (n + 1)) / 2;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) sum += arr[i];
  return expected - sum;
}
```

---

## 6. Merge Two Sorted Arrays
```js
function mergeSorted(a, b) {
  const res = [];
  let i = 0, j = 0, k = 0;
  while (i < a.length && j < b.length) {
    if (a[i] <= b[j]) res[k++] = a[i++];
    else res[k++] = b[j++];
  }
  while (i < a.length) res[k++] = a[i++];
  while (j < b.length) res[k++] = b[j++];
  return res;
}
```

---

## 7. Check if a String is Palindrome
```js
function isPalindromeStr(s) {
  let l = 0, r = s.length - 1;
  while (l < r) {
    if (s[l] !== s[r]) return false;
    l++; r--;
  }
  return true;
}
```

---

## 8. First Non-Repeating Character
```js
function firstNonRepeatingChar(s) {
  const freq = {};
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (freq[ch] === undefined) freq[ch] = 1;
    else freq[ch] = freq[ch] + 1;
  }
  for (let i = 0; i < s.length; i++) {
    if (freq[s[i]] === 1) return s[i];
  }
  return null;
}
```

---

## 9. Remove Duplicates From Sorted Array (In-place)
```js
function removeDuplicatesSorted(arr) {
  if (arr.length === 0) return [];
  let write = 1;
  for (let read = 1; read < arr.length; read++) {
    if (arr[read] !== arr[read - 1]) {
      arr[write] = arr[read];
      write++;
    }
  }
  // return the unique part as a new array for demonstration
  const result = [];
  for (let i = 0; i < write; i++) result[i] = arr[i];
  return result;
}
```
<!-- 1 js  -->
<!-- 1-2 react js -->
<!-- day 1 -->
<!-- array methods -->
<!-- 4-5  coding questions-->


