const formulario = document.querySelector("#formulario");
const idade = document.querySelector("#idade");
const sexo = document.querySelector("#sexo");
const nota = document.querySelector("#nota");
const resultados = document.querySelector("#checarResultados");

let idades = [];
let sexos = [];
let notas = [];

alert("fiz meu melhor com o tempo que tinha kkkkkkk, não esta bonito mas está funcionando");

function coletarDados(idade, sexo, nota){
    idades.push(parseInt(idade.value));
    sexos.push(sexo.value);
    notas.push(parseInt(nota.value));
}

function calcResultados(idades, sexos, notas){
    let cont = 0;
    let results = [];
    let maisVelha = 0;
    let maisNova = 0;
    let qtdePessoas = 0;
    let numBomEOtimo = 0;
    let numMulheres = 0;
    let numHomens = 0;

    idades.forEach((idade)=>{
        cont++;
        if(idade > maisVelha){
            maisVelha = idade;
        }
        if(idade < maisNova || cont == 1){
            maisNova = idade;
        }
    });

    sexos.forEach((sexo)=>{
        if(sexo == "Masculino"){
            numHomens++;
        }
        else{
            numMulheres++;
        }
    });

    notas.forEach((nota)=>{
        if(nota == 4 || nota == 5){
            numBomEOtimo++;
        }
    });

    qtdePessoas = idades.length;
    results.push(maisVelha, maisNova, numHomens, numMulheres, qtdePessoas, ((numBomEOtimo * 100)/qtdePessoas));
    return results;
}

formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    coletarDados(idade, sexo, nota);
    resultados.style.display = "";
});

resultados.addEventListener("click", (e)=>{
    e.preventDefault();
    results = calcResultados(idades, sexos, notas);
    formulario.style.display = "none";
    alert(
        "A pessoa mais velha possui " + results[0] + " anos\n"
        + "A pessoa mais nova possui" + results[1] + " anos\n"
        + "Número de homens" + results[2] + "\n"
        + "Número de mulheres" + results[3] + "\n"
        + "Quantidade total de pessoas" + results[4] + "\n"
        + "Porcentagem de bons e otimos" + results[5] + "%"
    );
});





