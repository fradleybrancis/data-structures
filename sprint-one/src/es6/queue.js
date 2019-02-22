class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.length = 0;
    this.start = 0;
    this.end = 0;
    this.storage = {};
  };

  enqueue(value) {
    this.storage[this.start] = value;
    this.length++;
    this.start++;
  };

  dequeue() {
    if (this.length === 0) {
      return 0;
    }
    var val = this.storage[this.end];
    this.end++;
    this.length--;
    return val;
  };

  size() {
    return this.length;
  }

}
