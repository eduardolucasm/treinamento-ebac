const form = document.getElementById("form-validador");

const numberOne = document.getElementById("Number-A");
const numberTwo = document.getElementById("Number-B");
let boxMensagem = document.querySelector(".box-message");
let mensagem = document.querySelector(".message");

let formValido = false;

function validarNumero(nA, nB){
    const validacao = nA < nB
    return validacao;
}

form.addEventListener("submit", function(e){
    e.preventDefault();

    let mensagemSucesso = `O número A é menor que o número B`;
    let mensagemErro = `Ops! O número A é maior que o número B`;
    let mensagemIgual = `Ops! Os dois números são iguais`;

    formValido = validarNumero(numberOne.value, numberTwo.value);

    if(formValido){
        console.log("Ta valido, olha só!");

        mensagem.innerHTML = mensagemSucesso;

        boxMensagem.style.display = "block";
        boxMensagem.classList.remove("error-message");
        boxMensagem.classList.add("sucess-message");
        boxMensagem.classList.remove("info-message");
    }else if(numberOne.value === numberTwo.value){
        console.log("Os números são iguais");

        mensagem.innerHTML = mensagemIgual;
        
        boxMensagem.style.display = "block";
        boxMensagem.classList.remove("sucess-message");
        boxMensagem.classList.remove("error-message");
        boxMensagem.classList.add("info-message");
    }else{
        console.log("Que pena!");

        mensagem.innerHTML = mensagemErro;

        boxMensagem.style.display = "block";
        boxMensagem.classList.remove("sucess-message");
        boxMensagem.classList.add("error-message");
        boxMensagem.classList.remove("info-message");
    }
})