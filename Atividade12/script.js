const janela = document.querySelector(".janela");
let janelaQuebrou = 0;

function mostrarJanela(){
    janela.style.opacity = 1;
}

janela.addEventListener('mouseover', () =>{
    janela.src = "./img/janelaaberta.png";
});

janela.addEventListener('mouseout', () =>{
    if(janelaQuebrou == 0){
        janela.src = "./img/janelafechada.png";
    }else {
        janela.src = "./img/janelaquebra.png";
    }
});

janela.addEventListener('click', () =>{
    janela.src = "./img/janelaquebra.png";
    janelaQuebrou = 1;
});

