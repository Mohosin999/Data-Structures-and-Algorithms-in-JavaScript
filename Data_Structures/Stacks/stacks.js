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

const reverseWord = "";

// put letters of word into stack
for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

console.log(letters);
