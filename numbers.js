const temperature = 36.6789;
console.log("Округлено:", Math.round(temperature * 10) / 10); 

// 2.
const a = 17;
const b = 5;
console.log("Целая часть:", Math.floor(a / b)); 
console.log("Остаток:", a % b);                 

// 3.
const randomInt = Math.floor(Math.random() * 10) + 1;
console.log("Случайное 1–10:", randomInt);

// 4.
console.log('isNaN("100" / 5) =', isNaN("100" / 5)); 
console.log('isNaN("сто" / 5) =', isNaN("сто" / 5)); 

// 5.
console.log("Максимум:", Math.max(14, -3, 77, 0, -100, 42));
console.log("Минимум:",  Math.min(14, -3, 77, 0, -100, 42)); 
