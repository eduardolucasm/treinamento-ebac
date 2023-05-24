let idade = prompt("Digite sua idade");
idade = parseInt(idade);

console.log(idade)




let nome = prompt("Digite seu nome");

function dizOi(){
    alert ("Olá " + nome);
}
dizOi();


function calculaIdade(anoNascimento){
    let idade = 2023 - anoNascimento;
    return idade;
}
calculaIdade(1994);



let anoNascimento = prompt("Em que ano você nasceu?");
anoNascimento = parseInt(anoNascimento);

alert("Você tem: " + calculaIdade(anoNascimento) + "anos");



let base = prompt("Digite o valor da base:");
let altura = prompt("Digite o valor da altura:");

// Deixei como parseFloat, pois assim pode receber números com . e não uma string ou número inteiro

base = parseFloat(base);
altura = parseFloat(altura);

function calculaArea(base, altura){
    let area = base * altura;
    return area;
}

alert("A área tem: " + calculaArea(base, altura));