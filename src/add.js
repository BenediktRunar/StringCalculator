function add(input){
    
    if(input === ""){
        return 0;
    }

    if(input.includes(",")){
        var inputArray = input.split(",");
        return parseInt(inputArray[0]) + parseInt(inputArray[1]);
    }

    //Ef það koma skrýtin results má prófa að gera return parseInt(input, 10);
    return parseInt(input);
}

module.exports = add;