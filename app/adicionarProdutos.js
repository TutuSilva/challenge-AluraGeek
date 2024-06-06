import { conectaApi } from "./conectaApi.js";
const formulario = document.querySelector("[data-formulario]");

async function adicionarProdutos(evento) {
  evento.preventDefault();
  const nome = document.querySelector("[data-nomeProduto]").value;
  const preco = document.querySelector("[data-precoProduto]").value;
  const imagem = document.querySelector("[data-imagemProduto]").value;

  await conectaApi.adicionarProdutos(nome, preco, imagem);
  
}

formulario.addEventListener("submit", (evento) => adicionarProdutos(evento));
