// /**
//  * factorial function with recursive call
//  */
// const factorial = (num) => {
//   if (num === 1) {
//     return num;
//   } else {
//     return num * factorial(num - 1);
//   }
// };

// console.log(factorial(4));

// /**
//  * Object class
//  */
// class Account {
//   constructor(amount) {
//     this.balance = amount;
//   }

//   withdraw(amount) {
//     if (amount <= this.balance) {
//       this.balance -= amount;
//     }

//     if (amount > this.balance) {
//       console.log(this.balance);
//       console.log("Insufficient Balance");
//     }
//   }

//   deposit(amount) {
//     this.balance += amount;
//   }

//   showBalance() {
//     return `Your Balance --> ${this.balance} `;
//   }
// }

// const account = new Account(5500);
// account.deposit(500);
// console.log(account.showBalance());
// account.withdraw(5000);
// console.log(account.showBalance());

// /**
//  * creating arrays from strings
//  */
// const sentence = "the quick brown fox jumped over the lazy dog";

// const arrFromStr = (str) => {
//   const word = str.split(" ");
//   for (let i = 0; i < word.length; i++) {
//     console.log(`word ${i} : ${word[i]}`);
//   }
// };

// arrFromStr(sentence);

// /**
//  * searching for a value use indexOf()
//  */
// const names = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer"];

// const searchValue = (arr, name) => {
//   const valueName = arr.indexOf(name);
//   if (valueName >= 0) {
//     console.log(`${name} is found at position ${valueName}`);
//   } else {
//     console.log(`${name} is not found`);
//   }
// };

// searchValue(names, "Raymond");
// searchValue(names, "Jennifer");

// /**
//  * sort()
//  */
// const names = ["David", "Mike", "Cynthia", "Clayton", "Bryan", "Raymond"];
// console.log(names.sort()); // [ 'Bryan', 'Clayton', 'Cynthia', 'David', 'Mike', 'Raymond' ]

// const nums = [3, 1, 2, 100, 4, 200];
// const sortNums = nums.sort((a, b) => a - b);

// console.log(nums.sort()); // [ 1, 100, 2, 200, 3, 4 ] ⚔️
// console.log(sortNums); // [ 1, 2, 3, 4, 100, 200 ]

// /**
//  * reduce()
//  */
// const words = ["the ", "quick ", "brown ", "fox "];
// const newWord = words.reduce((acc, cur) => {
//   return acc + cur;
// }, "");

// console.log(newWord);

// /**
//  * jagged array - grades 📔
//  */
// const gradesFunc = (arr) => {
//   let avg = 0.0;
//   for (let i = 0; i < arr.length; i++) {
//     let total = 0;
//     for (let j = 0; j < arr[i].length; j++) {
//       total += arr[i][j];
//     }
//     avg = total / arr[i].length;
//     console.log(`Student ${i + 1} Average : ${avg.toFixed(2)}`);
//   }
// };

// const grades = [
//   [89, 77],
//   [76, 82, 81],
//   [91, 94, 89, 99],
// ];
// gradesFunc(grades);

// // Exercise :
// // Create an object that stores individual letters in an array and has a function for
// // displaying the letters as a single word. solve with js
// const letters = {
//   letterList: [],

//   addLetter: function (letter) {
//     this.letterList.push(letter);
//   },

//   displayLetter: function () {
//     return this.letterList.join("");
//   },
// };

// letters.addLetter("A");
// letters.addLetter("K");
// letters.addLetter("A");
// letters.addLetter("S");
// letters.addLetter("H");
// console.log(letters.displayLetter()); ✔️
