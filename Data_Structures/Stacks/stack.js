/**
 * Stacks :
 * LIFO - Last In First Out
 */

/**
 * functions :
 * push - for placing data undo stack
 * pop - for moving the top element of the stack
 * peek - for displaying the top element of the stack
 * length / size / isEmpty - to know how many element on the stack
 */

const letters = []; // this is our stack

const word = "mohosin";

let reverseWord = "";

// put letters of word into stack
for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

// pop of the stack in reverse order
for (let i = 0; i < word.length; i++) {
  reverseWord += letters.pop();
}

if (reverseWord === word) {
  console.log(`${word} is a palindrome.`);
} else {
  console.log(`${word} is not a palindrome.`);
}

/**
 * **************************
 * Creates a Stack
 * **************************
 */
class Stack {
  // const Stack = function () {
  //   this.count = 0;
  //   this.storage = {};
  //   // Adds a value at the end of the stack
  //   this.push = function (value) {
  //     this.storage[this.count] = value;
  //     this.count++;
  //   };
  //   // Removes and returns the value at the end of the stack
  //   this.pop = function () {
  //     if (this.count === 0) {
  //       return undefined;
  //     }
  //     this.count--;
  //     const result = this.storage[this.count];
  //     delete this.storage[this.count];
  //     return result;
  //   };
  //   // To know the stack size
  //   this.size = function () {
  //     return this.count;
  //   };
  //   // To know the condition of this stack
  //   this.isEmpty = function () {
  //     return this.count < 0;
  //   };
  //   // Returns the value at the end of the stack
  //   this.peek = function () {
  //     return this.storage[this.count - 1];
  //   };
}

/**
 * **************************
 * Apply This Stack
 * **************************
 */
// let myStack = new Stack();
// console.log(myStack.isEmpty());

// myStack.push(1); // count: 0
// myStack.push(2); // count: 1
// myStack.push("akash"); // count: 2
// myStack.push(3); // count: 3

// console.log(myStack); // { '0': 1, '1': 2, '2': 'akash', '3': 3 } and //count: 4
// console.log(myStack.size()); // 4
// console.log(myStack.pop()); // 3
// console.log(myStack.peek()); // akash
// console.log(myStack.isEmpty());
