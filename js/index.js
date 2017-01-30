$(function(){
    $('#btn').click(function(e){
        e.preventDefault();
        var str = $('#inpt').val();
        var eltA = 0;
        var eltB = 1;
        var eltc = 0;
        if(str < 3){eltc=1} else{
        for (var i = 0;i < str-1;i++ ){
            eltc = eltB + eltA;
            eltA = eltB;
            eltB = eltc;
        }
        }
        var res = eltc;
        $('#result').html(res);
        $('p').addClass('done');
    })
    
});