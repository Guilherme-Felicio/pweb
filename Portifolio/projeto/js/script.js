let graficos = document.querySelectorAll(".grafico");
console.log(graficos);

window.addEventListener('scroll', (e)=>{
    if(scrollY > 420){
        graficos[0].style.paddingRight = "29vw";
        graficos[0].style.transition = "2s";
    }
})