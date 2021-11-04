/*document.querySelector('.menu-ind a').textContent='Startseite...';'
document.querySelector('.menu-ind a').style.background='#4c8';*/

let p1 = document.querySelector('#m-ind');
/*let p2 = document.getElementsByTagName('p');
p1.onclick = function (){
    p1.style.color='red';
}*/

let p3 =document.querySelector('#m-ind');

p3.addEventListener('click',changeColor);


function changeColor(){
    this.style.backgroundColor='#4c8';
    //p3.style.color='red';
}