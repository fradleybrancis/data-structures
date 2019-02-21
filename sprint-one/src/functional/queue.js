var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var start = 0;
  var end = 0;
  var length = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[start] = value;
    start++;
    length++;
  };

  someInstance.dequeue = function() {
    if (length === 0) {
      return 0;
    }
    var okay = storage[end];
    delete storage[end];
    end++;
    length--;
    return okay;

  };

  someInstance.size = function() {
    return length;
  };

  return someInstance;
};
