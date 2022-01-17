
// Footer alle seite
Vue.component('my-footer',{
    template:'<footer><p> © Copyright 2021 Ziwo Tsajio Jimmy Dave</p></footer>'
});
new Vue({
    el: '#AppFooter'
});
// Header alle seite

Vue.component('my-header',{
    template:'<header>\n' +
        '        <!--source w-%20eng.png: https://www.canva.com/design/play?type=TAB7AVEOUWQ&category=tACZCvjI6mE&locale=de-DE&analyticsCorrelationId=f100a21f-df3b-48f9-ac1e-3cf4d18e9104-->\n' +
        '       <a href="index.html" class="logoheader"><img src="../bilder/w-%20eng.png" alt="logo"></a>\n' +
        '        <a href="index.html"><h1 class="headtitle1"><strong class="titleoben">Web Engineering</strong><br>\n' +
        '            Darstellung von Übungsaufgaben </h1></a>\n' +
        '    </header>'
});
new Vue({
    el: '#AppHeader'
});

Vue.config.productionTip = false;
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


/*
     * Inspirietsource : https://www.youtube.com/watch?v=gXkqy0b4M5g&t=1118s
    */
const navSlide = () => {
    const micon= document.querySelector('.menu-icon');
    const nav = document.querySelector(' .topnav');
    const navLinks = document.querySelectorAll('.topnav li');

    micon.addEventListener('click',()=>{
        //Toggele Nav
        nav.classList.toggle('nav-active');

        //Animation Links
        navLinks.forEach((link, index) => {

            if (link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        //Menu-icon Animation
        micon.classList.toggle('toggle');
    });

}
navSlide();

//collapsible
//
// let collap = document.getElementsByClassName("collapsible");
// let i;
//
// for (i = 0; i< collap.length; i++ ){
//     collap[i].addEventListener("click", function () {
//         this.classList.toggle("collactive");
//         let content = this.nextElementSibling;
//         if(content.style.display==="block"){
//             content.style.display = "none";
//         }else {
//             content.style.display = "block";
//         }
//     });
// }

//Rolle wichtige sprache

let kreis = document.getElementById("kreis");
let oben = document.getElementById("oben");
let unten = document.getElementById("unten");

let dreh = kreis.style.transform;
let drehalle;

oben.addEventListener("click",nachOben);
unten.addEventListener("click",nachUnten);

function nachOben(){
    drehalle = dreh + "rotate(-90deg)";
    kreis.style.transform=drehalle;
    dreh = drehalle;
}
function nachUnten(){
    drehalle = dreh + "rotate(90deg)";
    kreis.style.transform=drehalle;
    dreh = drehalle;
}

