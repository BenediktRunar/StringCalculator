function add(input){
    
    if(input === ""){
        return 0;
    }

    if(input.includes(",")){
        //input skipt upp í hluta sem eru aðgreindir með ","
        var inputArray = input.split(",");

        //summu talnanna skilað
        return sum(inputArray);
    }

    //Ef það er ein tala í input-inu er henni skilað
    return parseInt(input);
}

module.exports = add;

function sum(inputArray){
    var sum = 0;
    
    for(var i = 0; i < inputArray.length; i++){
        sum += parseInt(inputArray[i]);
    }
    
    return sum;
}