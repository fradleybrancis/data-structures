var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.start = 0;
  someInstance.end = 0;
  someInstance.length = 0;
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
    var val = this.storage[this.end];
    delete this.storage[this.end];
    this.end++;
    this.length--;
    return val;
  },
  size: function() {
    return this.length;
  }
};


