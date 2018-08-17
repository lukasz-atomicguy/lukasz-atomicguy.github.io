function pobierzDane(method,url) {
    var httpReq = new XMLHttpRequest();
    httpReq.open( method, url );
    
    httpReq.onreadystatechange = function() {
        
        if ( httpReq.readyState == 4 ) {

            if ( httpReq.status == 200 ) {
                
                var returnData = httpReq.responseText;

                let jsonData = JSON.parse(returnData);
                
                let txt = document.createTextNode(jsonData.userId + " " + jsonData.userName + " " + jsonData.userURL);
                let pobraneDane = document.getElementById('pobrane-dane');
                
                pobraneDane.appendChild(txt);
                
                console.log(returnData);     
                console.log(jsonData);
                console.log(jsonData.userURL);
            
                httpReq = null;
                
            }
            
        }
    
    }

    httpReq.send();    
}
//
//document.getElementsById("pobierz-dane").onclick = pobierzDane("GET", "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl");
//

console.log(document.getElementById("pobierz-dane"));

document.getElementById("pobierz-dane").addEventListener("click", function(event){
        pobierzDane("GET", "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl");
});
