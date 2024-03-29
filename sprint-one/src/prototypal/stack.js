var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.length = 0;
  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this.length++;
    this.storage[this.length] = value;  
  },
  pop: function() {
    if (this.length === 0) {
      return 0;
    }
    var val = this.storage[this.length];
    delete this.storage[this.length];
    this.length--;
    return val;
  },
  size: function() {
    return this.length;
  }
};


