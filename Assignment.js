// problem-1
// A function to input a positive number & return the mind game value
function mindGame(number){
    if(typeof number == 'string' || number < 0 ){
        return "Provide a valid Input"
    }
    return(number * 3 + 10) / 2 -5;
}


// problem-2
// A function to input a string & finding the length of string is even or odd 
function evenOdd(str) {
    if(typeof str != 'string'){
        return "Provide a valid Input"
    }
    // checking the length of the string is even or odd
    if (str.length % 2 == 0) {
        return "even";
    }
    else {
        return "odd";
    }
}


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


// problem-4
// A function to take a array input & finding bad data
function findingBadData(result) {
    // checking invalid input
        for(let i = 0; i < result.length; i++){
            if(typeof result[i] == 'string')
        {
        return "Provide a valid Input"
    }
}

    let count = 0;
    // counting a negative number
    for (let i = 0; i < result.length; i++) {
        if (result[i] < 0) {
            count++;
        }
    }
    return count;
}

// problem-5
// A function to take three friends gems number & convert in diamond
function gemsToDiamond(gems1, gems2, gems3) {
    // checking the valid number of parameter
    if (arguments.length > 3 || arguments.length < 3){
        return "Provide a valid Input";
    }
    // counting total Diamond 
        let totalDiamond = gems1 * 21 + gems2 * 32 + gems3 * 43;

        if(totalDiamond>1000*2){
            return totalDiamond - 2000;
        }
    
        else{
            return totalDiamond;
        }
    
}
