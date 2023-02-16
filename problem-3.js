// problem-3
// A function to take a number & check is less or greater than seven
function isLGSeven(number){
  if(typeof number == 'string'){
    return "Provide a valid Input"
}
// finding the difference with 7
  let difference = number - 7;
  // checking the difference is less than 0
  if(difference < 0){
    return difference;
  }
  else{
    return number * 2
  }
}
console.log(isLGSeven(15));