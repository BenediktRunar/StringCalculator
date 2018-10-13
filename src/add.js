function add(input){
    //input skipt upp í hluta sem eru aðgreindir með annaðhvort "," eða "\n"
    var inputArray = input.split(/[\,\n]/);

    //summa talnanna reiknuð í sum
    return sum(inputArray);
}

module.exports = add;

function sum(inputArray){
    var sum = 0;
    
    for(var i = 0; i < inputArray.length; i++){
        //Ef talan er yfir 1000 er hún hunsuð og næsta tala skoðuð
        if(over1000Check(inputArray, i)){
            continue;
        }
        
        //Kastar villu ef það er neikvæð tala í strengnum
        negativeCheck(inputArray, i);

        //Tölunni bætt við sum
        sum += parseInt(inputArray[i] || 0);
    }
    
    return sum;
}

function negativeCheck(inputArray, i){
    var isNegative = false;
    var negativeNumbers = "";

    if(parseInt(inputArray[i]) < 0){
        for(; i < inputArray.length; i++){
            if(parseInt(inputArray[i]) < 0){
                if(isNegative){
                    negativeNumbers += "," + inputArray[i];
                }
                else{
                    negativeNumbers += inputArray[i];
                }
            }
            
            isNegative = true;
        }
    }
    
    if(isNegative){
        throw new Error("Negatives not allowed:" + negativeNumbers);
    }
}

function over1000Check(inputArray, i){
    if(parseInt(inputArray[i]) > 1000){
        return true;
    }
    else{
        return false;
    }
}