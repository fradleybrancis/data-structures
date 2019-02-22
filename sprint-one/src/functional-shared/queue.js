var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.start = 0;
  someInstance.end = 0;
  someInstance.length = 0;
  someInstance.storage = {};
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.start] = value;
    this.start++;
    this.length++;
  },
  dequeue: function() {
    if (this.length === 0) {
      return 0;
    };
    var okay = this.storage[this.end];
    delete this.storage[this.end];
    this.end++;
    this.length--;
    return okay;
  },
  size: function() {
    return this.length;
  }
};


