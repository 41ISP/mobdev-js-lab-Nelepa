// 1
const book = {
  title: "Мастер и Маргарита",
  author: "Булгаков М.А.",
  year: 1967,
  pages: 480,
  available: true,

  info() {
    return `«${this.title}», ${this.author}, ${this.year} г., ${this.pages} стр.`;
  },
};

console.log(book.info());

// 2
const { title, author, rating = 0 } = book;

console.log("title: ", title);   
console.log("author:", author);  
console.log("rating:", rating);  



// 3
const students = [
  { name: "Анна",     grade: 4.8, passed: true  },
  { name: "Борис",    grade: 2.9, passed: false },
  { name: "Вера",     grade: 3.5, passed: true  },
  { name: "Григорий", grade: 4.1, passed: true  },
  { name: "Дарья",    grade: 2.5, passed: false },
];

// 3.1
const passedNames = students
  .filter((student) => student.passed)
  .map((student) => student.name);

console.log("Сдавшие:", passedNames);



// 3.2
const bestStudent = students.find((student) => student.grade > 4.5);

console.log("Оценка > 4.5:", bestStudent);



// 3.3
const averageGrade =
  students.reduce((sum, student) => sum + student.grade, 0) / students.length;

console.log("Средний балл:", averageGrade.toFixed(2));




// 4
function mergeUsers(user1, user2) {
  return { ...user1, ...user2 }; // правый объект перезаписывает совпавшие ключи
}

const u1 = { name: "Иван", age: 20, city: "Казань" };
const u2 = { name: "Иван Петров", email: "ivan@mail.ru", city: "Москва" };

console.log(mergeUsers(u1, u2));




// 5
function countByField(arr, field) {
  return arr.reduce((acc, item) => {
    const key = item[field];
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
}

console.log(countByField(students, "passed"));
