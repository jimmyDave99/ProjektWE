
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
