const form = document.getElementById("form-calc");
const imgAprovado = `<img src="images/aprovado.png" alt="Aprovado" />`;
const imgReprovado = `<img src="images/reprovado.png" alt="Reprovado" />`;

const atividades = [];
const notas = [];
const spanAprovado = `<span class="resultado aprovado">Aprovado</span>`;
const spanReprovado = `<span class="resultado reprovado">Reprovado</span>`;
const notaMinima = parseFloat(prompt("Digite a Nota Minima:"));

let linhas = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();
  adicionaLinha();
  atualizaTabela();
  atualizaMedia();
});

function adicionaLinha() {
  const inputNome = document.getElementById("nome-atividade");
  const inputNota = document.getElementById("nota-atividade");

  if (atividades.includes(inputNome.value)) {
    alert(`A atividade ${inputNome.value} foi inserida`);
  } else {
    atividades.push(inputNome.value);
    notas.push(parseFloat(inputNota.value));

    let linha = "<tr>";
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputNota.value}</td>`;
    linha += `<td>${
      inputNota.value >= notaMinima ? imgAprovado : imgReprovado
    }</td>`;
    // Colocamos ? para quando o resultado é positivo e : quando é negativo
    linha += `</tr>`;

    linhas += linha;
  }
  inputNome.value = "";
  inputNota.value = "";
}
function atualizaTabela() {
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;
}
function atualizaMedia() {
  const mediaFinal = calculaMedia();

  document.getElementById("media-final").innerHTML = mediaFinal;
  document.getElementById("media-resultado").innerHTML =
    mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}
function calculaMedia() {
  let somaNotas = 0;

  for (let i = 0; i < notas.length; i++) {
    somaNotas += notas[i];
  }

  return (media = somaNotas / notas.length);
}
