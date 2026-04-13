const menuicon =document.querySelector(".menu-icon") ;
const menu =document.querySelector(".menu");
const menucross=document.querySelector(".menu-cross");
menuicon.addEventListener("click", ()=>{
      menu.classList.toggle("active");

}) ;

menucross.addEventListener("click", ()=>{
    menu.classList.remove("active");
})
