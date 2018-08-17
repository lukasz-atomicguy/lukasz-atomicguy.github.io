let form = document.getElementById("formularz");

function pobierzImie(event){
    event.preventDefault();
    let imie = "";
    let nazwisko = "";
    
    for (let i = 0; i < this.elements.length; i++){
        if (this.elements[i].name == "fname"){
            imie = this.elements[i].value;
        }
        if (this.elements[i].name == "lname"){
            nazwisko = this.elements[i].value;
        }
    }
    console.log(`Imię: ${imie} | Nazwisko: ${nazwisko}`);
}

form.addEventListener("submit", pobierzImie);
