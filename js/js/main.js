//------------------
//zmienne

let imie = "MojeImie";
let nazwisko = "MojeNazwisko";

imie = "Łukasz";

//zmienna var

var wiek;
var waga = 76;

console.log(imie, nazwisko);

console.log(wiek, waga);

waga = 106;

console.log(waga);

//stałe, najlepiej wielkimi literami

const CONFIG_AJAX_URL = "http://akademia108.pl/api/users.json";

console.log(CONFIG_AJAX_URL);

//-----------------
//Funkcje

let tytul = "Tytul ksiazki";

let autor = "Autor ksiazki";

function wyswietlDane() {
    console.log(tytul, autor);
}

wyswietlDane()

tytul1 = "AB"
autor2 = "CDDD"

function wyswietlDane2(tytul, autor) {
    console.log(tytul, autor);
}

wyswietlDane2(tytul1, autor2)

function obliczProcent(kwota, procent) {
    let wynik = kwota * (procent / 100);
    return wynik;
}

let kwota1 = 200;
let procent1 = 50;

let wynik = obliczProcent(kwota1, procent1);

console.log(wynik);

//ESG funkcja strzałkowa

const obliczProcent2 = (kwota, procent) => {
    let wynik = kwota * (procent / 100);
    return wynik;
}

//skrocona postać funkcji strzałkowej:
const obliczProcent3 = (kwota, procent) => kwota * (procent / 100);

let wynik3 = obliczProcent2(kwota1, procent1);
console.log(wynik3);

//przykład zasięgu blokowego zmiennej:
var myFunction = () => {
    let myVar = 150;
    if (true) {
        let myVar = 150;
    }
    console.log(myVar);
}

//let i var inny zasięg, let - blokowy, var - funkcyjny

myFunction()

//-----------------
//Typy danych

let wiekXYZ = 15;

let zdanie = 'XYZ ma ' + wiekXYZ + ' lat.';
console.log(zdanie);

let zdanie2 = `(2) XYZ ma ${wiekXYZ} lat.`;
console.log(zdanie2);

var goroco = true;
if (goroco == true) {
    console.log("Idę na basen");
} else {
    console.log("Nie idę na basen");
}

//----------------------
//Tablice

let imiona = ["Adam", "Łukasz"];
console.log(imiona);

imiona.push("Agata", "Elżbieta");
console.log(imiona);

imiona.pop();
console.log(imiona);

imiona.unshift("Tomasz");
console.log(imiona);

imiona.shift();
console.log(imiona);

console.log(imiona.length);

console.log(imiona.join('++'));

imiona.reverse();
console.log(imiona);

imiona.sort();
console.log(imiona);


//---------------------
//Obiekty

let samochod = {
    marka: "Ford",
    model: "Focus",
    rok: 2013,
    silnik: 2.1,
    uruchom: function () {
        console.log("Brum brum");
    },
    przedstawSie() {
        let name = `Nazywam się ${this.marka} ${this.model}`;
        console.log(name);
    }
}

console.log(samochod.silnik, samochod['rok'])
samochod.uruchom()
samochod['przedstawSie']()


//---------------------
//Klasy

class Ogloszenie {
    constructor(objOgloszenie){
        this.ogloszenieItem = objOgloszenie;
    }
    pobierzOgloszenie(){
        return this.ogloszenieItem;
    }
    wyswietlOgloszenie(){
        console.log(this.ogloszenieItem);
    }
    pobierzIDOgloszenia(){
        return this.ogloszenieItem.id;
    }
    pobierzTytulOgloszenia(){
        return this.ogloszenieItem.tytul;
    }
}

//class Ogloszenie {
//    constructor(id, tytul, opis, kontakt){
//        this.id = id;
//        this.tytul = tytul;
//        this.opis = opis;
//        this.kontakt = kontakt;
//    }
//    pobierzIDOgloszenia(){
//        return this.id;
//    }
//    pobierzTytulOgloszenia(){
//        return this.tytul;
//    }
//    pobierzOpisOgloszenia(){
//        return this.opis;
//    }
//}
//
//let o = new Ogloszenie(13324, 'Sprzedam kota', 'Sprzedam młodego kota', '223324342342')


let o = new Ogloszenie(
{
    id: 13324,
    tytul: 'Sprzedam kota',
    opis: 'Sprzedam młodego kota',
    kontakt: '223324342342',
});

console.log(o);

o.wyswietlOgloszenie();
let id2 = o.pobierzIDOgloszenia();
console.log(id2);
let tytul2 = o.pobierzTytulOgloszenia();
console.log(tytul2);

    
//------------------
//Obiekt Math

console.log(Math.PI);


//------------------
//Operatory


//-----------------
//Instrukcje warunkowe

let godzina = 17;

switch(godzina){
    case 9:
        console.log("Startujemy z kursem");
        break;
    case 13:
        console.log("Jemy obiad");
        break;
    case 17:
        console.log("Koniec na dziś");
        break;
    default:
        console.log("Uczymy się");
}

//-----------------
//Pętle

let arr = ["dane1", "dane2", "dane3", "dane4"]

for (let i = 0; i < arr.length; i++){
    console.log(`index: ${i} | value: ${arr[i]}`)
}

arr.forEach((elementyTablicy, indexTablicy) => {
    console.log(`new index: ${indexTablicy} | value: ${elementyTablicy}`)
})


const CONFIG = {
    name: "webpage",
    data: {
    id: 12345,
    title: "Config title"
},
      start: "20180801 12:00:00",
}

for (let index in CONFIG.data){
    console.log(`index: ${index} | value: ${CONFIG[index]}`);
}

//while:

let init = 0;
while (init < 15) {
    console.log(init);
    init++;
}

//do while:

do {
    console.log(init);
} while(init > 15);

for (let i = 0; i < 20; i++) {
    if(i > 9){
        break;
    }
    console.log(i);
}

for (let i = 0; i < 20; i++){
    if (i % 2 == 0){
        continue;
    }
    console.log(i);
}


//-------------------------------
//MODEL DOM

Znajdowanie elementów:
console.dir(window);

var sectionFirst = document.getElementById("sectionFirst");
console.log(sectionFirst);

var linki = document.getElementsByClassName( "link" );
console.log(linki);

var akapity = document.getElementsByTagName( "p" );
console.log(akapity);

for (let i = 0; i < akapity.length; i++){
    console.log(akapity[i]);
}

var parSecond = document.querySelector("#parSecond");
console.log(parSecond);

var linki2 = document.querySelectorAll(".link");
console.log(linki2);

//Relacje między węzłami:

var parFirst = document.querySelector("#parFirst");
console.log(parFirst);

//pobranie dzieci
console.log(parFirst.childNodes);
console.log(parFirst.children);

//pobranie rodzica
console.log(parFirst.parentElement);

//rodzenstwo
console.log(parFirst.nextElementSibling);

console.log(parFirst.firstElementChild);

let dzieci = parFirst.childNodes;
console.log(dzieci);

dzieci.forEach(function(element){
    if(element.nodeType == 1){
        console.log(element);
    }
})

//tworzenie elementów i węzłów:

var parSecond = document.getElementById("parSecond");
var newElement = document.createElement("p");
var elementContent = document.createTextNode("Jakiś nowy teskt.");
newElement.setAttribute("class","new-class");
//wstawiamy tekst do akapitu
newElement.appendChild(elementContent);
//wstawiamy cały akapit do div #parSecond
parSecond.appendChild(newElement);


//to samo, co wyżej, ale szybciej:

var newPar = document.createElement("p");
newPar.setAttribute("class", "my-class");
newPar.innerHTML = "Kolejny nowy akapit";
parSecond.appendChild(newPar);


//usuwanie elementów:
//(1)
parSecond.removeChild(newPar);

//(2)
var par = document.querySelector("#parSecond p");
par.parentElement.removeChild(par);

//(3)
var span = document.querySelector(".my-span");
span.removeAttribute("class");


//Manipulacje DOM

var parFirst = document.getElementById("parFirst");
var parFirstHTML = parFirst.innerHTML;
var parFirstHTML2 = parFirst.outerHTML;
console.log(parFirstHTML);
console.log(parFirstHTML2);

parFirst.innerHTML = "<button>Nowy przycisk</button>";
var parFirstHTML = parFirst.innerHTML;
console.log(parFirstHTML);

var firstLink = document.querySelectorAll('a')[0];
firstLink.href = "http://www.forumatomowe.org";
//firstLink.className = "super-link";
firstLink.classList.add("superlink");
firstLink.style.backgroundColor = "blue";
firstLink.style.color = "white";
console.log(firstLink);



//EVENTY

function changeBody(event){
    event.preventDefault();
    document.body.style.backgroundColor = "blue";
}

document.getElementsByClassName("link")[2].onclick = function(event) {
    event.preventDefault();
    document.body.className = "rutinoskorbin";
}

document.querySelector("h1").addEventListener("mouseenter", function(){
    this.className = "h1-size-xl";
})

document.querySelector("h1").addEventListener("mouseleave", function(){
    this.className = "";
})

//nadpisywanie

let div = document.getElementById("parSecond");
let p = document.querySelector("#parSecond p")

div.addEventListener("click", function(){
    console.log("Klimięto diva");
})                   

p.addEventListener("click", function(event){
    event.stopPropagation();
    console.log("Klimięto paragraf");
})
















