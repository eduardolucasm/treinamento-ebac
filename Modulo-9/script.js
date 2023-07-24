$(document).ready(function () {
  // $("header button"); É desse jeito que selecionamos uma variavel no JQuery

  $("header button").click(function () {
    $("form").slideDown();
  });

  $("#cancelar").click(function () {
    $("form").slideUp();
  });

  $("form").on("submit", function (e) {
    e.preventDefault();
    const enderecoImagemNova = $("#endereco-imagem").val();
    const novoItem = $(`<li style="display:none"></li>`);
    $(`<img src="${enderecoImagemNova}" />`).appendTo(novoItem);
    $(
      `<div class="overlay"><a href="${enderecoImagemNova}" title="Ver imagem em tamanho real" target="_blank">Ver imagem em tamanho real</a></div>`
    ).appendTo(novoItem);
    $(novoItem).appendTo("ul");
    $(novoItem).fadeIn(1000);
    $("#endereco-imagem").val("");
  });
});
