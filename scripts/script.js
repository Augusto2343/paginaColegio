const desplNav = document.getElementById("desplNav");
const contNavDespl = document.getElementById("contDesplNav");
const containerNav = document.getElementById("headerContainerNav")
const openNavBtn = document.getElementById("openIcon");
const closeNavBtn = document.getElementById("closeIcon");
const responsiveContNavDespl = document.getElementById("contDesplNavResp")
let tamanioVentana=0;
openNavBtn.onclick = (e) =>{
   
    containerNav.classList.add("responsiveActive");
    closeNavBtn.classList.add("responsiveActive");

}
closeNavBtn.onclick = (e) =>{
   
    containerNav.classList.remove("responsiveActive");
    closeNavBtn.classList.remove("responsiveActive");
    closeNavBtn.classList.add("hidden");
}
desplNav.onclick = (e) =>{
   
    if(tamanioVentana < 501) {
        responsiveContNavDespl.classList.toggle("active")
    }
    else{
       
        contNavDespl.classList.toggle("active")
    }
    
}
const setNavClasses = () =>{
    tamanioVentana = window.innerWidth;

    if(tamanioVentana < 501) containerNav.classList.add("w-screen","h-screen");
    else containerNav.classList.remove("w-screen","h-screen")
}
setNavClasses();
window.addEventListener("resize",() =>{
    setNavClasses()
})