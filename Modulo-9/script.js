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
  });
});
