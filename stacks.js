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
const MAX_SIZE = 30;

class Stack {
  // const Stack = function () {
  //   this.count = 0;
  //   this.storage = {};
  constructor() {
    this.list = new Array(MAX_SIZE);
    this.top = -1;
  }

  // Adds a value at the end of the stack
  //   this.push = function (value) {
  //     this.storage[this.count] = value;
  //     this.count++;
  //   };
  push(value) {
    if (this.top >= MAX_SIZE) {
      console.log("Stack Overflow");
      return false;
    }

    // this.top++;
    this.list[++this.top] = value;
    return true;
  }

  // Removes and returns the value at the end of the stack
  //   this.pop = function () {
  //     if (this.count === 0) {
  //       return undefined;
  //     }
  //     this.count--;
  //     const result = this.storage[this.count];
  //     delete this.storage[this.count];
  //     return result;
  //   };
  pop() {
    if (this.isEmpty()) {
      console.log("Stack Underflow");
      return false;
    }

    const result = this.list[this.top];
    delete this.list[this.top];
    this.top--;
    return result;
  }

  // To know the stack size
  //   this.size = function () {
  //     return this.count;
  //   };
  size() {
    if (this.isEmpty()) {
      console.log("Stack Underflow");
      return false;
    }

    return ++this.top;
  }

  // To know the condition of this stack
  //   this.isEmpty = function () {
  //     return this.count < 0;
  //   };
  isEmpty() {
    return this.top < 0;
  }

  // Returns the value at the end of the stack
  //   this.peek = function () {
  //     return this.storage[this.count - 1];
  //   };
  peek() {
    if (this.isEmpty()) {
      console.log("Stack Underflow");
      return false;
    }

    return this.list[this.top];
  }
}

/**
 * **************************
 * Apply This Stack
 * **************************
 */
let myStack = new Stack();

myStack.push(1);
myStack.push(2);
myStack.push("akash");
myStack.push(3);

console.log(myStack);
console.log(myStack.size());
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.isEmpty());

// Palindromes
