const form = document.querySelector('form');
form.addEventListener('submit', validar);


function validar(e){
    e.preventDefault();
    let isEmail = [];
    const paragrafo = document.querySelector('form p');
    const tamanhoNome = document.forms[0].elements[0].value.length;
    const email = document.forms[0].elements[1].value.split('');
    const tamanhoComentario = document.forms[0].elements[2].value.length;
    const sim = document.querySelector("#sim");
    const nao = document.querySelector("#nao");
   
    

    email.forEach((char) => {
        if(char === "@"){
            isEmail[0] = true;
        } else if(char === "."){
            isEmail[1] = true;
        }
    });

    if(tamanhoComentario >= 20 && tamanhoNome >= 10 && isEmail[0] == true && isEmail[1] == true){
        if(sim.checked){
            paragrafo.innerHTML = "Que  bom que você voltou a visitar esta página!";
        }else if(nao.checked){
            paragrafo.innerHTML = "Volte sempre à está página!"
        }
    }



    
 
}