let arr = [15, 30, 45, 60, 75, 90];
function extractAndReverse(arr) 
{
  let subArray = arr.slice(2, 5);
  return subArray.reverse();
}
console.log(extractAndReverse(arr));
