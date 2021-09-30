let arrNum = [];
const form = document.querySelector("form");
const numero1 = document.querySelector("#numero1");
const numero2 = document.querySelector("#numero2");
const numero3 = document.querySelector("#numero3");
let cont;


console.log(form);
function inverteArr(){
    let arrInvertido;
    arrInvertido = arrNum.reverse();
    return arrInvertido;
}

function arrayOrd(){
    console.log(arrNum);
    let arrOrd;
    arrOrd = arrNum.sort();
    return arrOrd;
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    arrNum.push(parseFloat(numero1.value));
    arrNum.push(parseFloat(numero2.value));
    arrNum.push(parseFloat(numero3.value));

    arrNum.sort();
    alert('array ordenado: ' + arrNum);
    arrNum.reverse();
    alert('array invertido: ' + arrNum);

    
    console.log(arr);
});






