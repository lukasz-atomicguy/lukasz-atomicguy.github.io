var wszystkieZgody = document.getElementById("wszystkie-zgody");
var zgodaMarketingowa1 = document.getElementById("zgoda-marketingowa-1");
var zgodaMarketingowa2 = document.getElementById("zgoda-marketingowa-2");
var wyslijBtn = document.getElementById("wyslij");
var inputImie = document.getElementById("name");
var inputEmail = document.getElementById("email");
var error = document.getElementsByClassName("error");


var walidujFormularz = function(event){
    //czyscimy komunikaty z bledami
    for(let i = 0; i < error.length; i++){
        error[i].innerHTML = "";
    }
    //waliduje pole imie i nazwisko
    //trim usuwa puste znaki
    if (inputImie.value.trim() == ""){
        error[0].innerHTML = "Wpisz swoje imie i nazwisko!";
        event.preventDefault();
    }
    //waliduje pole email
    if (inputEmail.value.trim() == "" || inputEmail.value.indexOf("@") == -1){
        error[1].innerHTML = "Wpisz adres email!";
        event.preventDefault();
    }
    //waliduje pierwszego checkboxa
    if (!zgodaMarketingowa1.checked){
        error[2].innerHTML = "Nie wyraziłeś obowiązkowej zgody";
        event.preventDefault();
    }
}

var zaznaczWszystkie = function(){
    zgodaMarketingowa1.checked = this.checked;
    zgodaMarketingowa2.checked = this.checked;
    
    zgodaMarketingowa1.disabled = this.checked;
    zgodaMarketingowa2.disabled = this.checked;
}

wyslijBtn.addEventListener("click", walidujFormularz);

wszystkieZgody.addEventListener("change", zaznaczWszystkie);

