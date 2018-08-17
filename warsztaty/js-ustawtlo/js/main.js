function ustawTlo(){
    let parBg1 = "red";
    let parBg2 = "yellow";
    let allP = document.getElementsByTagName("p");
    allP[0].style.backgroundColor = parBg1;
    allP[1].style.backgroundColor = parBg2;
}

//document.querySelector("button").addEventListener("click", ustawTlo);