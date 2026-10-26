const nums = [1, 2, 3, 4, 5];
nums.push(6);        // [1,2,3,4,5,6]
nums.pop();          // [1,2,3,4,5]
nums.unshift(0);     // [0,1,2,3,4,5]
nums.shift();        // [1,2,3,4,5]

console.log("slice:", nums.slice(1, 3)); // [2,3]

const arr2 = [1, 2, 3, 4, 5];
arr2.splice(1, 2);
console.log("splice:", arr2); // [1,4,5]

// 2
console.log("map:", nums.map(n => n * 2)); // [2,4,6,8,10]

// 3
console.log("filter:", nums.filter(n => n % 2 === 0)); // [2,4]

// 4
console.log("reduce:", nums.reduce((s, n) => s + n, 0)); // 15

// 5
console.log("find:", nums.find(n => n > 3));           // 4
console.log("findIndex:", nums.findIndex(n => n > 3)); // 3

// 6
console.log(nums.includes(3), nums.indexOf(3)); // true 2

// 7
const unsorted = [3, 1, 5, 2, 4];
console.log("sort:", [...unsorted].sort((a, b) => a - b)); // [1,2,3,4,5]

// 8
nums.forEach((n, i) => console.log(`idx ${i}: ${n}`));

// 9
const words = ["яблоко", "банан", "апельсин", "киви"];
console.log(
  words.filter(w => w.length > 4).map(w => w.toUpperCase())
); 
