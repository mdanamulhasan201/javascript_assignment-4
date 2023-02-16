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


let result = [1,-2,-5]
console.log(findingBadData(result));