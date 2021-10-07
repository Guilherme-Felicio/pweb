const nomeAluno1 = document.querySelector("#nomeAluno1");
const nomeAluno2 = document.querySelector("#nomeAluno2");
const nomeAluno3 = document.querySelector("#nomeAluno3");
const raAluno1 = document.querySelector("#raAluno1");
const raAluno2 = document.querySelector("#raAluno2");
const raAluno3 = document.querySelector("#raAluno3");
const form = document.querySelector("form");
console.log(nomeAluno1);
console.log(nomeAluno2);
console.log(nomeAluno3);
console.log(raAluno1);
console.log(raAluno2);
console.log(raAluno3);




function criarAlunos(){
    let alunos = [];
    let aluno1 = {
        nome: nomeAluno1.value,
        ra: raAluno1.value
    };
    
    let aluno2 = {}
    aluno2.nome = nomeAluno2.value;
    aluno2.ra = raAluno2.value;
    
    let aluno3 = new Object();
    aluno3.nome = nomeAluno3.value;
    aluno3.ra = raAluno3.value;

    alunos[0] = aluno1;
    alunos[1] = aluno2;
    alunos[2] = aluno3;
    return alunos;
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    let alunos = criarAlunos();

    alert("\nnome do aluno1: " + alunos[0].nome 
      + "\nRA do aluno1: " + alunos[0].ra +
      "\nnome da aluno2: " + alunos[1].nome 
      + "\nRA da aluno2: " + alunos[1].ra +
      "\nnome da aluno3: " + alunos[2].nome
      + "\nRA da aluno3: " + alunos[2].ra 
    );
});

