// function Queue() {
//   const collection = [];

//   this.print = function () {
//     console.log(collection);
//   };

//   this.enqueue = function (element) {
//     collection.push(element);
//   };

//   this.dequeue = function () {
//     return collection.shift();
//   };

//   this.front = function () {
//     return collection[0];
//   };

//   this.size = function () {
//     return collection.length;
//   };

//   this.isEmpty = function () {
//     return collection.length === 0;
//   };
// }

const MAX_SIZE = 30;
class Queue {
  constructor() {
    this.front = 0;
    this.rear = 0;
    this.queue = new Array(MAX_SIZE);
  }

  enqueue(item) {
    if (this.rear === MAX_SIZE) {
      console.log("Queue is full");
      return false;
    }

    this.queue[this.rear++] = item;
  }

  dequeue() {
    if (this.rear === this.front) {
      console.log("Queue is empty");
      return false;
    }

    // this.rear--;
    const item = this.queue[this.front];
    for (let i = this.front; i < this.rear - 1; i++) {
      this.queue[i] = this.queue[i + 1];
    }

    delete this.queue[--this.rear];
    // delete this.queue[this.rear];
    // return item;
  }

  showQueue() {
    if (this.front === this.rear) {
      console.log("Queue is Empty");
      return;
    }
    for (let i = this.front; i < this.rear; i++) {
      console.log("[Displaying]", this.queue[i]);
    }
  }

  nextQueue() {
    if (this.front === this.rear) {
      console.log("Queue is Empty");
      return;
    }
    return this.queue[this.front];
  }
}

const myQueue = new Queue();
myQueue.enqueue("a");
myQueue.enqueue("b");
myQueue.enqueue("c");

myQueue.dequeue();
console.log(myQueue.showQueue());
console.log(myQueue.nextQueue());
