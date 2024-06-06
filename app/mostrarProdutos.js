import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");

function formataPreco(preco) {
  return parseFloat(preco).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
function constroiCard(nome, preco, imagem, id) {
  const precoFormatado = formataPreco(preco);
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
                <p class="preco-do-produto">${precoFormatado}</p>
                <button class="btn-excluir-item">
                  <span class="material-symbols-outlined"> delete </span>
                </button>
              </div>
              <hr />`;

  const btnExcluir = produto.querySelector(".btn-excluir-item");
  btnExcluir.addEventListener("click", async () => {
    const confirmacao = confirm(
      "Tem certeza de que deseja excluir este produto?"
    );
    if (confirmacao) {
      const resultado = await conectaApi.excluirProdutos(id);
      if (resultado) {
        produto.remove();
      } else {
        alert(
          "Não foi possível excluir o produto. Tente novamente mais tarde."
        );
      }
    }
  });

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

listaDeProdutos();
