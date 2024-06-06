import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");

function constroiCard(nome, preco, imagem, id) {
  const produto = document.createElement("div");
  produto.className = "produtos-item";
  produto.innerHTML = `<img
                class="imagem-do-produto"
                src="${imagem}"
                alt="imagem não encontrada"
              />
              <div class="card nome-do-produto" id="${id}">
                <h2 class="nome-do-produto">${nome}</h2>
              </div>
              <div class="card preco-excluir">
                <p class="preco-do-produto">${preco}</p>
                <button class="btn-excluir-item">
                  <span class="material-symbols-outlined"> delete </span>
                </button>
              </div>
              <hr />`;
  return produto;
}

async function listaDeProdutos() {
  const listaAPI = await conectaApi.listaDeProdutos();
  listaAPI.forEach((elemento) =>
    lista.appendChild(
      constroiCard(elemento.nome, elemento.preco, elemento.imagem, elemento.id)
    )
  );
}

listaDeProdutos()
