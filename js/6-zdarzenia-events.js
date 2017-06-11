'use strict';
var secondLink = document.getElementsByTagName('a')[1];

console.log(secondLink);

function alarm(e){
    e.preventDefault();
    console.log("kliknięto kolejny link");
    
    console.log(event);
    
}
secondLink.onclick= alarm;