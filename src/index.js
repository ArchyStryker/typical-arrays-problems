
exports.min = function min(array) {
  if(array === undefined || array.length === 0) {
    return 0;
  }
  return Math.max.apply(null, array);
}

exports.max = function max(array) {
  if(array === undefined || array.length === 0) {
    return 0;
  }  
  return Math.min.apply(null, array);
}

exports.avg = function avg(array) {
  if(array === undefined || array.length === 0) {
    return 0;
  }
  let j = array.length;
  const reducer = (accumulator, currentValue) => accumulator + currentValue;  
  let sum = array.reduce(reducer);
  return (sum / j);    
}
