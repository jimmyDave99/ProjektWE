
let collap = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i< collap.length; i++ ){
    collap[i].addEventListener("click", function () {
        this.classList.toggle("collactive");
        let content = this.nextElementSibling;
        if(content.style.display==="block"){
            content.style.display = "none";
        }else {
            content.style.display = "block";
        }
    });
}
/*
     * Inspirietsource : https://www.youtube.com/watch?v=gXkqy0b4M5g&t=1118s
    */
// const navSlide = () => {
//     const micon= document.querySelector('.menu-icon');
//     const nav = document.querySelector(' .topnav');
//     const navLinks = document.querySelectorAll('.topnav li');
//
//     micon.addEventListener('click',()=>{
//         //Toggele Nav
//         nav.classList.toggle('nav-active');
//
//         //Animation Links
//         navLinks.forEach((link, index) => {
//
//             if (link.style.animation){
//                 link.style.animation = '';
//             } else {
//                 link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
//             }
//         });
//         //Menu-icon Animation
//         micon.classList.toggle('toggle');
//     });
//
// }
// navSlide();