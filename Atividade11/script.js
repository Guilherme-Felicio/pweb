let base =  parseFloat(prompt("Digite a base"));
let altura = parseFloat(prompt("Digite a altura"));
console.log(base);
function construirRetangulos(x,y){
    this.base = x;
    this.altura = y;
    this.calcularArea = () => {
        return this.base * this.altura;
    }
}

let retangulo = new construirRetangulos(base, altura);

alert("Área do retangulo: " + retangulo.calcularArea());


function Conta(){
    let = nomeCorrentista;
    let = banco;
    let = numeroConta;
    let saldo;

    this.getNomeCorrentista = function(){
    return nomeCorrentista;
    }; 

    this.setNomeCorrentista = function(value){
        nomeCorrentista = value;
    };

    this.getBanco = function(){
        return banco;
    };

    this.setBanco= function(value){
        banco = value;
    };

    this.getNumeroConta = function(){
        return numeroConta;
    };

    this.setNumeroConta= function(value){
        numeroConta = value;
    };

    this.getSaldo = function(){
        return saldo;
    };

    this.setSaldo= function(value){
        saldo = value;
    };  
}

function Corrente(){
    let saldoEsp;
    let contaCorrente;

    this.getSaldoEsp = function(){
        return saldoEsp;
    };

    this.setSaldoEsp= function(value){
        saldoEsp = value;
    };  

    this.getContaCorrente = function(){
        return contaCorrente;
    };

    this.setContaCorrente= function(value){
        contaCorrente = value;
    }; 
}

function Poupanca(){
    let juros;
    let poupanca;

    this.getJuros = function(){
        return juros;
    };

    this.setJuros= function(value){
        juros = value;
    };  

    this.getPoupanca = function(){
        return poupanca;
    };

    this.setPoupanca= function(value){
        poupanca = value;
    }; 
}


Poupanca.prototype = new Conta();
Corrente.prototype = new Conta();

contaCorrente = new Corrente();
contaPoupanca = new Poupanca();
contaPoupanca.setJuros("1");
contaPoupanca.setNomeCorrentista("alfredo");

alert("Juros da conta poupanca: " + contaPoupanca.getJuros()
        + "\nnome do correntista: " + contaPoupanca.getNomeCorrentista()
        + "\nnão deu tempo de fazer o resto ksksks");