function add(input){
    //Ef strengurinn er tómur er skilað 0
    if(input === ""){
        return 0;
    }

    if(input.includes(",")){
        //input skipt upp í hluta sem eru aðgreindir með ","
        var inputArray = input.split(",");
        //farið í gegnum allan array-inn og summa talnanna fundin
        var sum = 0;
        for(var i = 0; i < inputArray.length; i++){
            sum += parseInt(inputArray[i]);
        }
        //sum skilað
        return sum;
    }

    //Ef það er ein tala í input-inu er henni skilað
    return parseInt(input);
}

module.exports = add;