var Queue = function() {
  this.storage = {};
  this.length = 0;
  this.start = 0;
  this.end = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.start] = value;
  this.start++;
  this.length++;
};

Queue.prototype.dequeue = function() {
  if (this.length === 0) {
    return 0;
  };
  var val = this.storage[this.end];
  delete this.storage[this.end];
  this.end++;
  this.length--;
  return val;
};

Queue.prototype.size = function() {
  return this.length;
};


