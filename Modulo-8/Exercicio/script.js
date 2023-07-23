const form = document.getElementById("form-novo-contato");
const nome = [];
const telefone = [];

let linhas = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();
  adicionarLinha();
  atualizarTabela();
  atualizaTotal();
});

function adicionarLinha() {
  const inputNome = document.getElementById("nome-input");
  const inputTelefone = document.getElementById("telefone-input");

  if (telefone.includes(inputTelefone.value)) {
    alert("Parece que esse telefone você já adicionou antes");
  } else {
    nome.push(inputNome.value);
    telefone.push(inputTelefone.value);
    first = inputNome.value.charAt(0).toUpperCase();

    let linha = `<tr>`;
    linha += `<td><span class="iconeContato">${inputNome.value
      .charAt(0)
      .toUpperCase()}</span></td>`;
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    linha += `</tr>`;

    linhas += linha;
  }
  inputNome.value = "";
  inputTelefone.value = "";
}
function atualizarTabela() {
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;
}
function atualizaTotal() {
  const total = totalContatos();

  document.getElementById("quantidadeContatos").innerHTML = total;
}
function totalContatos() {
  return nome.length;
}
