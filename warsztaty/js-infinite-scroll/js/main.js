let height = window.innerHeight;

console.log(height);


function ajax(method,url) {
    let httpReq = new XMLHttpRequest();
    
    httpReq.open( method, url );
    
    httpReq.onreadystatechange = function() {
        
        if ( httpReq.readyState == 4 ) {

            if ( httpReq.status == 200 ) {
                
                var returnData = httpReq.responseText;

                let jsonData = JSON.parse(returnData);
                
                let txt = "";
                let divDane = document.getElementById("lista");
            
                jsonData.forEach(function(element){
                    txt += `<p> Uzywkownik: </p><p> ${element.id} </p><p> ${element.name} </p><p> ${element.website} </p>`;
                    divDane.innerHTML = txt;
                })
                
                divDane.innerHTML = txt;
                
                divDane.onscroll = function(){
                    if (divDane.scrollTop >= divDane.offsetHeight){
                        console.log("Jestem u dołu");
                        divDane.innerHTML = txt;
                    }
                };
                
                
                httpReq = null;
                //documentelement
                //offsetheiht    
                //scrolltop
                
                console.log(divDane.offsetHeight);
                
            }
            
        }
    
    }

    httpReq.send();    
}

ajax( "GET", "https://jsonplaceholder.typicode.com/users" );