const form = document.getElementById("form-deposito");
const nomeBeneficiario = document.getElementById("nome-beneficiario");
let formValido = false

function validaNome(nomeCompleto){
    const nomeCompletoArray = nomeCompleto.split(" ");
    return nomeCompletoArray.length >= 2;
}

form.addEventListener("submit", function(e){
    e.preventDefault();
    
    const numeroConta = document.getElementById("numero-conta");
    const valorDeposito = document.getElementById("valor-deposito");
    const mensagemSucesso = `Montante de: ${valorDeposito.value} depositado para o cliente ${nomeBeneficiario.value} - Conta ${numeroConta.value}`

    formValido = validaNome(nomeBeneficiario.value);

    if (formValido){
        // alert(mensagemSucesso);
        const containerMensagem = document.querySelector(".sucess-message");
        containerMensagem.innerHTML = mensagemSucesso;
        containerMensagem.style.display = "block";
        // document.querySelector(".sucess-message").innerHTML = mensagemSucesso;
        // document.getElementsByClassName("sucess-message").innerHTML = mensagemSucesso;

        nomeBeneficiario.value = "";
        numeroConta.value = "";
        valorDeposito.value = "";
    } else{
        nomeBeneficiario.classList.add("error");
        document.querySelector(".error-message").style.display = "block";
    }
});

nomeBeneficiario.addEventListener('keyup', function(e){
    console.log(e.target.value)
    formValido = validaNome(e.target.value);

    if (!formValido){
        // nomeBeneficiario.style.border = `1px solid red`;
        nomeBeneficiario.classList.add("error")
        document.querySelector(".error-message").style.display = "block";
    }else{
        nomeBeneficiario.classList.remove("error");
        document.querySelector(".error-message").style.display = "none";
    }
})