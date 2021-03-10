
exports.min = function min (array) {
  if (array === undefined || array === null){
    return 0;
  }  
  const reducer = (accumulator, currentValue) => accumulator < currentValue ? accumulator : currentValue;
  let min = array.reduce(reducer);
  return min;
}

exports.max = function max (array) {
  if (array === undefined || array === null){
    return 0;
  } 
  const reducer = (accumulator, currentValue) => accumulator > currentValue ? accumulator : currentValue;
  let max = array.reduce(reducer);
  return max;
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
