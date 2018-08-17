//zawsze dodajemy, aby przegladarka wywolala tryb restrykcyjny:
'use strict';

//1. document ready

//Funkcja document.ready() - wersja skrócona:
//$(function(){
//  
////  alert('test');
//    $("#first").css("color", "blue").hide().show(3000);
//    
//    
//});


//2. selektory

//$(function () {
//    //pobieranie paragrafów ze strony:
//    let paragraphs = $('p');
//    console.log(paragraphs);
//    
//    //pobieranie elementów po id:
//    let paragraphs2 = $('#paragraf');
//    console.log(paragraphs2);
//    
//    //pobieranie elementów po id:
//    let paragraphs3 = $('.paragrafnext');
//    console.log(paragraphs3);
//    
//})

//3. Manipulacja DOM

//$(function () {
//
//    //text() - wypisuje tekst
//    //    let paragraf = $('#paragraf').text("zmiana tekstu paragrafu");
//    //    console.log(paragraf);
//
//    let paragraf2 = $('#paragraf').html('Tekst <a href="">link2</a>');
//    console.log(paragraf2);
//
//    //    paragraf2.prepend("Coś dodatkowego ");
//
//    //    let paragraf3 = $('.paragrafnext').remove();
//
//    paragraf2.css({
//        "color": "red",
//        "font-size": "45px"
//    });
//    //lub jeśli jeden: paragraf2.css("color", "red");
//    
//    //    console.log(paragraf2.css("color"));
//
//    let inputKsywa = $("#ksywa");
//    inputKsywa.val("Łysy");
//    
////    paragraf2.text(inputKsywa.val());
//    
//    inputKsywa.addClass("in-ksywa icosjeszcze");    
//    inputKsywa.removeClass("iscosjeszcze");
//})


//4. Find each

//$(function () {
//  
//    let elementBody = $("body");
//    console.log(elementBody);
//    
//    let paragrafy = elementBody.find('p');
//    //zwracana jest zawsze tablica, odwołujemy się do konkratnego elementu przez eq(id)
//    console.log(paragrafy.eq(1));
//    
//    paragrafy.eq(1).css("color", "green");
//    
//    
//    $('p').each(function(index){
//       $(this).addClass("klasa-"+index); 
//    });
//    
//})


//5. Eventy

//$(function () {
//    $('p').click(function(){
//        $(this).css("color", "orange");
//    });
//    
//    $('h1').on({
//        'click': function(){
//            $(this).css("color","orange");
//        },
//        'dblclick': function(){
//            $(this).css("color", "red");
//        },
//        'mouseleave': function() {
//            $(this).css("color", "green");
//        }
//        });
//    
//    $('p').on(
//        {
//            'mouseenter': function(){
//                $(this).css("color", "gold");
//            },
//            'mouseleave': function(){
//                $(this).css("color", "blue");
//            }
//        }
//    );
//})

//6. Animacja

$(function () {
    
    $('p').hide(3000).show(3000);
    
    $('h2').click(function(){
//        $(this).fadeOut(3000).fadeIn(2000);
        $(this).slideUp(2000).slideDown(2000);
    })
    
    
    function zakonczonaAnimacja(){
        $('h3').animate({'font-size': '1em', 'margin-left': '0px'}, 2000)
    }
    
    $('h3').animate(
        {
            'font-size': '3em',
            'margin-left': '100px'
        },
        2000,
        zakonczonaAnimacja
    );
    
    //aby animować kolor trzeba dopiąć bilbiotekę "JQuery UI"
    
})



















