//$.getJSON("http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl", function(data){
//    console.log(data);
//});
'use strict';

$('#pobierz-dane').click(function(){
    $.getJSON("http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl", function(data){
        let tekst = data.userId + " " + data.userName + " " + data.userURL;
        $('#pobrane-dane').text(tekst);
    });
})