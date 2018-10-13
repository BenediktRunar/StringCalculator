function add(input){
    if(input === ""){
        return 0;
    }
    
    //input skipt upp í hluta sem eru aðgreindir með annaðhvort "," eða "\n"
    var inputArray = input.split(/[\,\n]/);

    //summu talnanna skilað
    return sum(inputArray);
}

module.exports = add;

function sum(inputArray){
    var sum = 0;
    var negativeNumbers;
    var j = 0;
    
    for(var i = 0; i < inputArray.length; i++){
        //Kastar villu ef það er neikvæð tala í strengnum
        negativeCheck(inputArray, i);

        sum += parseInt(inputArray[i]);
    }
    
    return sum;
}

function negativeCheck(inputArray, i){
    var isNegative = false;
    var negativeNumbers = "";

    for(; i < inputArray.length; i++){
        
        if(parseInt(inputArray[i]) < 0){
            if(isNegative){
                negativeNumbers += "," + inputArray[i];
            }
            else{
                negativeNumbers += inputArray[i];
            }
            
            isNegative = true;
        }
    }
    
    if(isNegative){
        throw new Error("Negatives not allowed:" + negativeNumbers);
    }
}