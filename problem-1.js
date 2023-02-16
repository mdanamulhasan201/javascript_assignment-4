// problem-1
// A function to input a positive number & return the mind game value
function mindGame (number){
    if(typeof number == 'string' || number < 0 ){
        return "Provide a valid Input"
    }
    return(number * 3 + 10) / 2 -5;
}

console.log(mindGame(-5));