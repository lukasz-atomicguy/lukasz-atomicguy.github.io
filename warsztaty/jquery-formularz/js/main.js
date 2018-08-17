'use strict';

$(function () {

    let formPizza = $("#form-pizza");
//    console.log(formPizza);
    let selectPizza = $('#pizza');
    let price = $("#cena");


    let priceTable = [
        {
            type: "pizza1",
            price: "33 PLN"
        },
        {
            type: "pizza2",
            price: "36 PLN"
        },
        {
            type: "pizza3",
            price: "45 PLN"
        },
        {
            type: "pizza4",
            price: "90 PLN"
        },
        {
            type: "pizza5",
            price: "23 PLN"
        },
    ]


    selectPizza.change(function () {
        let pizzaType = $(this).val();

        priceTable.forEach(function (el, i) {
            if (pizzaType == el.type) {
                $("p.cena").text('Cena końcowa: ' + el.price);
            }

        });

    });
    

    formPizza.submit(function () {
        console.log('Działa');
        let polaDoSprawdzenia = $('.item-required');
        let wszystkieKomunikaty = []; 
        let komunikat = '';
        let ulKomunikaty = $('#komunikat');
        let polaCheckBox = $(".checkbox-required");
        let liElementy = "";
        let poleSelectPizza = $("#pizza");
        let polaTekstowe = $('[type="text"]');
        let polaDoWysylki = {};
        let klucz = '';
        let wartosc = '';
        
        console.log(poleSelectPizza);
        
        if (poleSelectPizza.val() == 'defaultvalue'){
            komunikat = "PIZZA NIE ZOSTAŁA WYBRANIA!";
            wszystkieKomunikaty.push(komunikat);
        }

        polaDoSprawdzenia.each(function(){
            if ($.trim( $(this).val()) == '' || !$(this).val()){
                komunikat = "Uzupełnij pole: " + $(this).attr('id') + '!';
                wszystkieKomunikaty.push(komunikat);
            }
        });
        
        polaCheckBox.each(function(){
            if (!$(this).prop('checked')){
                komunikat = "Uzupełnij pole: " + $(this).attr('id') + '!';
                wszystkieKomunikaty.push(komunikat);
            }
        });
        
        console.log(wszystkieKomunikaty);

        if (wszystkieKomunikaty.length != 0) {
            wszystkieKomunikaty.forEach(function(element){
                liElementy += "<li>" + element + "</li>";
            });
            console.log(liElementy);
            ulKomunikaty.html(liElementy);
//            return false;
        }

//      Przygotowanie do wysyłki:

        polaTekstowe.each(function(){
            klucz = $(this).attr("name");
            wartosc = $(this).val();
            polaDoWysylki[klucz] = wartosc;
        });
        
        let kluczpizza = 'TypPizzy';
        let wartoscpizza = poleSelectPizza.val();
        console.log(wartoscpizza);
        polaDoWysylki[kluczpizza] = wartoscpizza;
        
        //sos1:
        let kluczsos1 = 'Sos1';
        let wartoscsos1 = false;
        if ($("#sos1").prop('checked')){
            wartoscsos1 = true;
        };
        polaDoWysylki[kluczsos1] = wartoscsos1;
       
        //sos2
        let kluczsos2 = 'Sos2';
        let wartoscsos2 = false;
        if ($("#sos2").prop('checked')){
            wartoscsos2 = true;
        };
        polaDoWysylki[kluczsos2] = wartoscsos2;
        
        console.log(polaDoWysylki);
        
        //do wysyłki:
        console.log(JSON.stringify(polaDoWysylki));
        
        return false;
    });





})
