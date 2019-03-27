function simpleArraySum (array){

    var tempArray = array.split(' ');
    var sum = 0;
    $.each(tempArray, function (index, value) {
        
        sum = sum + parseInt(value);
    });

    return sum;
}