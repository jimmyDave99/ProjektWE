
let modal1= document.getElementById('idpos1');
let modal2= document.getElementById('idpos2');
let modal3= document.getElementById('idwir');
let modal4= document.getElementById('idrflex');
let modal5= document.getElementById('idgrid');
let modal6= document.getElementById('idlp');
window.onclick = function (event){
    if(event.target == modal1){
        modal1.style.display="none";
    }
    if(event.target == modal2){
        modal2.style.display="none";
    }
    if(event.target == modal3){
        modal3.style.display="none";
    }
    if(event.target == modal4){
        modal4.style.display="none";
    }
    if(event.target == modal5){
        modal5.style.display="none";
    }
    if(event.target == modal6){
        modal6.style.display="none";
    }
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += "responsive";
    } else {
        x.className = "topnav";
    }
}