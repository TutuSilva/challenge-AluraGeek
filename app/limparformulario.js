const botaoLimpar = document.querySelector(".btn-limpar");

botaoLimpar.addEventListener("click", function (evento) {
  evento.preventDefault();

  const nome = document.querySelector("[data-nomeProduto]");
  const preco = document.querySelector("[data-precoProduto]");
  const imagem = document.querySelector("[data-imagemProduto]");

  nome.value = "";
  preco.value = "";
  imagem.value = "";
});
