function isNumber(number) {
  let array = number.split("");
  let numArray = []
  array.forEach(function(e) {
    e = parseInt(e)
    numArray.push(e);
  });
  console.log(numArray)
  let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (i = 0; i < numArray.length; i++) {
    let num = numArray[i]
    if (numbers.includes(num))  {
      return "1"
    } else {
      return "0"
    }
  }
}
function ignoreNonNumber(number) {
  let array = number.split("");
  let Numbers = "0, 1, 2, 3, 4, 5, 6, 7, 8, 9";
  if(!Numbers.includes(array)) {
    nonNumericNumber = array.join("")
    nonNumericNumber = nonNumericNumber.replace(/ /g, "")
    nonNumericNumber = nonNumericNumber.replace(/-/g, "")
    return nonNumericNumber
  } else {
    return number
  }
}
function everyOtherNum(number) {
  let array = number.split("");
  array = parseInt(array)
  console.log(array);
  for (let i = array.length -1; i > 0; i = i - 2) {
    array[i] = array[i] *2
  }
}