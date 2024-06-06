async function listaDeProdutos() {
  const conexao = await fetch("http://localhost:3000/produtos");
  const conexaoConvertida = await conexao.json();
  return conexaoConvertida;
}
async function adicionarProdutos(nome, preco, imagem, id) {
  const conexao = await fetch("http://localhost:3000/produtos", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      nome: nome,
      preco: preco,
      imagem: imagem,
      id: id,
    }),
  });

  const conexaoConvertida = await conexao.json()
  return conexaoConvertida
}
export const conectaApi = {
  listaDeProdutos, adicionarProdutos
};
