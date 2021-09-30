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

    let arr1 = arrNum.sort((a,b) =>{
        return a - b;
    });
    alert('array ordenado: ' + arr1);
    let arr = arrNum.reverse();
    alert('array invertido: ' + arr);

    
    console.log(arr);
});






