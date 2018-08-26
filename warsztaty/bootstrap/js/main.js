//w JS

let menuLinks = document.querySelectorAll('a[href^="#"]')

for (let item of menuLinks) {
    item.addEventListener('click', (e) => {
        let hashval = item.getAttribute('href')
        let target = document.querySelector(hashval)
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        history.pushState(null, null, hashval)
        e.preventDefault()
    })
}

//w JQuery:

//'use strict'
//
//$('.nav-link').click(function(){
//    console.log(this)
//    $('html, body').animate({scrollTop: $(this.hash).offset().top}, 500);
//})


//=========================================================================

window.addEventListener("scroll", function (event) {

    var top = this.scrollY;
    var nawigacja = document.getElementsByClassName("nawigacja")[0];

    if (top > 0) {
        nawigacja.classList.add("nawigacja-scroll")
    } else {
        nawigacja.classList.remove("nawigacja-scroll")
    }
});

//w JQuery:

//$(window).scroll(function(){
//    if ($(window).scrollTop()>0){
//        $("main-nav").addClass("nawigacja-scroll");
//    }
//})





