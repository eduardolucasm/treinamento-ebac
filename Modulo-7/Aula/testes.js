// Selecionar um elemento atraves do JV

document.getElementsByTagName("input");

let input = document.getElementsByTagName("input");
input[1]


// Selecionar um elemento atraves do ID

document.getElementById("nome-beneficiario")

// da para fazer uma cascata
document.getElementsByTagName("form")[0].getElementsByTagName("buttom");

// Selecionar uma classe
document.getElementsByClassName("container");


document.querySelector("button")
document.querySelector("input[type=number]")

document.querySelectorAll("input#numero-conta")

