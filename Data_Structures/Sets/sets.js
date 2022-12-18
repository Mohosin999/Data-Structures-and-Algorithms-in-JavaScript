/**
 * Sets
 * functions:
 * has()
 * values()
 * add()
 * remove()
 * size()
 * union()
 * intersection()
 * difference()
 * subset()
 */
class MySet {
  // function mySet() {
  // the const collection will hold the set
  //   const collection=[]
  constructor() {
    this.collection = [];
  }

  // this method will check for the presence of an element and return true or false
  //   this.has = function (element) {
  //     return (collection.indexOf(element) !== -1);
  //   };
  has(element) {
    return this.collection.indexOf(element) !== -1;
  }

  // this method will return all the values in the set
  //   this.values = function () {
  //     return collection;
  //   };
  values() {
    return this.collection;
  }

  // this method will add an element to the set
  //   this.add = function (element) {
  //     if (!this.has(element)) {
  //       collection.push(element);
  //       return true;
  //     }
  //     return false;
  //   };
  add(element) {
    if (!this.has(element)) {
      this.collection.push(element);
      return true;
    }
    return false;
  }

  // this method will remove an element from a set
  //   this.remove = function (element) {
  //     if (this.has(element)) {
  //       const index = collection.indexOf(element);
  //       collection.splice(index, 1);
  //       return true;
  //     }
  //     return false;
  //   };
  remove(element) {
    if (this.has(element)) {
      const index = this.collection.indexOf(element);
      this.collection.splice(index, 1);
      return true;
    }
    return false;
  }

  // this method will return the size of the collection
  //   this.size = function () {
  //     return collection.length;
  //   };
  size() {
    return this.collection.length;
  }

  // this method will return the union of two sets
  //   this.union = function (otherSet) {
  //     const unionSet = new mySet();
  //     const firstSet = this.values();
  //     const secondSet = otherSet.values();

  //     firstSet.forEach(function (e) {
  //       unionSet.add(e);
  //     });

  //     secondSet.forEach(function (e) {
  //       unionSet.add(e);
  //     });

  //     return unionSet;
  //   };
  union(otherSet) {
    const unionSet = new MySet();
    const firstSet = this.values();
    const secondSet = otherSet.values();

    firstSet.forEach((item) => {
      unionSet.add(item);
    });

    secondSet.forEach((item) => {
      unionSet.add(item);
    });

    return unionSet;
  }

  // this method will return the intersection (মিল) of two sets as a new set
  //   this.intersection = function (otherSet) {
  //     const intersectionSet = new mySet();
  //     const firstSet = this.values();

  //     firstSet.forEach(function (e) {
  //       if (otherSet.has(e)) {
  //         intersectionSet.add(e);
  //       }
  //     });

  //     return intersectionSet;
  //   };
  intersection(otherSet) {
    const intersectionSet = new MySet();
    const firstSet = this.values();

    firstSet.forEach((item) => {
      if (otherSet.has(item)) {
        intersectionSet.add(item);
      }
    });

    return intersectionSet;
  }

  // this method will return the difference of two sets as a new set
  //   this.difference = function (otherSet) {
  //     const differenceSet = new mySet();
  //     const firstSet = this.values();

  //     firstSet.forEach(function (e) {
  //       if (!otherSet.has(e)) {
  //         differenceSet.add(e);
  //       }
  //     });

  //     return differenceSet;
  //   };
  difference(otherSet) {
    const differenceSet = new MySet();
    const firstSet = this.values();

    firstSet.forEach((item) => {
      if (!otherSet.has(item)) {
        differenceSet.add(item);
      }
    });

    return differenceSet;
  }

  // this method will test if the set has a subset of a different set
  //   this.subset = function (otherSet) {
  //     const firstSet = this.values();
  //     return firstSet.every(function (value) {
  //       return otherSet.has(value);
  //     });
  //   };
  subset(otherSet) {
    const firstSet = this.values();
    return firstSet.every((item) => {
      return otherSet.has(item);
    });
  }
}

/**
 * *******************************
 * Testing
 * *******************************
 */

// const setA = new mySet();
// const setB = new mySet();
// setA.add("a");
// setA.add("d");
// setB.add("b");
// setB.add("c");
// setB.add("a");
// setB.add("d");

const setA = new MySet();
const setB = new MySet();
setA.add("a");
setA.add("d");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");

console.log(setA.subset(setB));
console.log(setB.difference(setA).values());
console.log(setA.intersection(setB).values());
console.log(setA.union(setB).values());
console.log(setA.size());
console.log(setA.remove("a"));
console.log(setA.remove("d"));
console.log(setA.has("d"));
