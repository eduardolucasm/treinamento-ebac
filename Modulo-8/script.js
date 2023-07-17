const form = document.getElementById("form-calc");
const imgAprovado = `<img src="images/aprovado.png" alt="Aprovado" />`;
const imgReprovado = `<img src="images/reprovado.png" alt="Reprovado" />`;

let linhas = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const inputNome = document.getElementById("nome-atividade");
  const inputNota = document.getElementById("nota-atividade");

  let linha = "<tr>";
  linha += `<td>${inputNome.value}</td>`;
  linha += `<td>${inputNota.value}</td>`;
  linha += `<td>${inputNota.value >= 7 ? imgAprovado : imgReprovado}</td>`;
  // Colocamos ? para quando o resultado é positivo e : quando é negativo
  linha += `</tr>`;

  linhas += linha;

  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;

  inputNome.value = "";
  inputNota.value = "";
});
