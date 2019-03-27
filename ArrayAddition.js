function simpleArraySum (array){

    var tempArray = array.split(' ');
    var sum = 0;
    $.each(tempArray, function (index, value) {
        
        sum = sum + parseInt(value);
    });

    return sum;
}

$(document).ready(function(){
        $("#btnClick").on('click',function(){
            var total =simpleArraySum($("#txtInput").val());
        $("#txtInput").val(total);
    });
}); 
