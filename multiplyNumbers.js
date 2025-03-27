function multiplyNumbers(a, b) 
{ 
  return multiplyNumbers.apply(null,[a * b]);
}; 
console.log(multiplyNumbers(2, 3));