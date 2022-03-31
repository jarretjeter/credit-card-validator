function isNumber(number) {
  let array = number.split("");
  array = parseInt(array)
  let arrayOfNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  if(arrayOfNumbers.includes(array)) {
    return 1
  } else {
    return 0
  }
}