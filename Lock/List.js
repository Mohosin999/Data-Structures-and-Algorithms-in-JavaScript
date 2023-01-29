class List {
  constructor() {
    this.dataStore = [];
    this.listSize = 0;
  }

  append(item) {
    this.dataStore[this.listSize++] = item;
  }

  findItem(item) {
    for (let i = 0; i < this.dataStore.length; i++) {
      if (this.dataStore[i] === item) {
        return i;
      }
    }
    return -1;
  }

  remove(item) {
    const index = this.findItem(item);
    if (index > -1) {
      this.dataStore.splice(index, 1);
      this.listSize--;
      return true;
    }
    return false;
  }

  length() {
    return this.listSize;
  }

  showList() {
    return this.dataStore;
  }

  insert(item, after) {
    const index = this.findItem(after);
    if (index > -1) {
      this.dataStore.splice(index + 1, 0, item);
      this.listSize++;
      return true;
    }
    return false;
  }

  clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = 0;
  }

  isIncludes(item) {
    for (let i = 0; i < this.dataStore.length; i++) {
      if (this.dataStore[i] === item) {
        return true;
      }
    }
    return false;
  }

  front() {
    return this.dataStore[0];
  }

  last() {
    return this.dataStore[this.listSize - 1];
  }

  previous() {
    if (this.listSize > 0) {
      this.dataStore[--this.listSize];
      return true;
    }
  }
}

const names = new List();
names.append("Mohosin");
names.append("Hasan");
names.append("Rasel");
names.append("Robi");
names.append("Manik");

// console.log(names.insert("Asik", "Hasan"));
// console.log(names.showList());
