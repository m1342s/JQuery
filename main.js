$(document).ready(function () {
  $("header button").click(function () {
    $("form").slideDown();
  });
  $("#reset").click(function() {
    $("form").slideUp()
  })
  $("form").on("submit", function (e) {
    e.preventDefault(e);
    const endereco=$("#endereco-imagem").val()
    const novoItem=$("<li></li>")
    $(`<img src="${endereco}"/>`).appendTo(novoItem)
    $(`<div class="overlay-imagem-link">
      <a href="${endereco}" target="_blank" title="Ver imagem em tamanho real">Ver imagem em tamanho real</a>
       </div>`).appendTo(novoItem)
    $(novoItem).appendTo("ul")
    $(novoItem).fadeIn()
  });
});
