const sentence = " javascript — это просто! ";
const trimmed = sentence.trim();                         
const firstChar = trimmed.charAt(0).toUpperCase();      
const restChars = trimmed.slice(1);                     
const result1 = firstChar + restChars;

console.log(result1); 

// 2. 
const lastName   = "Иванов";
const firstName  = "Иван";
const group      = "ИСР-21";
const average    = 4.75;

const studentLine = `Студент ${lastName} ${firstName}, группа ${group}, средний балл: ${average}`;
console.log(studentLine);


// 3. 
const dateStr = "2025-03-15";
const parts = dateStr.split("-");   
const [year, month, day] = parts;

const formattedDate = `${day}.${month}.${year}`;
console.log(formattedDate); 

// 4.
const profession = "Node.js разработчик";

const starts = profession.startsWith("Node");
const ends   = profession.endsWith("разработчик");

console.log("Начинается с 'Node':", starts);          
console.log("Заканчивается на 'разработчик':", ends);
