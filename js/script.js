let butn= document.getElementById('idbutton');
let modal= document.getElementById('id01');

//butn.addEventListener('click',myFunction);

window.onclick = function (event){
    if(event.target == modal){
        modal.style.display="none";
    }
}




function changeColor(){
    this.style.backgroundColor='#4c8';
    //p3.style.color='red';
}