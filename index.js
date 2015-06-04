Object.prototype.setProperty = function(pathStr, value) {
  var cursor = this;
  var pathArr = pathStr.split('.');
  pathArr.forEach(function(key, index) {
    if (index < (pathArr.length - 1)) {
      if (typeof cursor[key] !== 'object') cursor[key] = {};
      cursor = cursor[key];
    } else {
      cursor[key] = value;
    }
  });
  return this;
};
