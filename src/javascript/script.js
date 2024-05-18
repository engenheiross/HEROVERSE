// SLIDESHOW

let imagens=['./src/assets/capitain_america.jpg','./src/assets/deadpool.jpg','./src/assets/gwen_stacy.jpg','./src/assets/iron_man.jpg','./src/assets/miles_morales.jpg'];
let index =0;
let time= 3000;

function slideShow(){
    document.getElementById('banner').src=imagens[index];
    index++;

    if(index == imagens.length){
        index=0;
    }
    setTimeout('slideShow()', time);
}
slideShow();

// CONTADOR
function numero(){

    const contador = document.getElementById("contador")
    let valor=0;
    
    let tempo =setInterval(()=>{
        valor +=1;

        contador.innerHTML = `+ ${valor}`;

        if(valor == 80){
            clearInterval(tempo)
        }
        
    })
}

// SISTEMA DE CADASTRO DE EMAIL
document.addEventListener("DOMContentLoaded", function(){

    let email = document.querySelector(".info-email");
     let msg = document.querySelector(".mensagem");

    msg.classList.add("hidden");

    email.addEventListener("keyup", function(event){
        if(event.keyCode === 13) {
            event.preventDefault();
            msg.classList.remove("hidden")
            email.style.display="none";
            email.value = "";
        }
    })
})

// MENU HAMBÚRGUER
const btnMobile =document.querySelector("#btnMob")

function Menu(){
    const navBar =document.querySelector("nav")
    navBar.classList.toggle("active");
}

btnMobile.addEventListener('click',Menu)