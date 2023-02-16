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
let result = gemsToDiamond(100, 5,5);
console.log(result);