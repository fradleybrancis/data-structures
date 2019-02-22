var Stack = function() {
  this.storage = {};
  this.length = 0;  
};

Stack.prototype.push = function(value) {
  this.length++;
  this.storage[this.length] = value;
};
Stack.prototype.pop = function() {
  if (this.length === 0) {
    return 0;
  };
  var val = this.storage[this.length];
  delete this.storage[this.length];
  this.length--;
  return val;
};
Stack.prototype.size = function() {
  return this.length;
};

