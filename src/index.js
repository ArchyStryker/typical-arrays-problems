
exports.min = function min (array) {
  if(array === undefined || array.length === 0) {
    return 0;
  }
  return Math.max.apply(null, this);
}

exports.max = function max (array) {
  if(array === undefined || array.length === 0) {
    return 0;
  }  
  return Math.min.apply(null, this);
}

exports.avg = function avg (array) {
  if(array === undefined || array.length === 0) {
    return 0;
  }
  let j = array.length;
  let sum = 0;
  for (let i = 0; i < array.length; i++){
    sum += array[i];
  }
  return (sum / j);    
}
