async function listaDeProdutos() {
  const conexao = await fetch("https://json-server-orpin-one.vercel.app/produtos");
  const conexaoConvertida = await conexao.json();
  return conexaoConvertida;
}
async function adicionarProdutos(nome, preco, imagem, id) {
  const conexao = await fetch("https://json-server-orpin-one.vercel.app/produtos", {
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
  const conexaoConvertida = await conexao.json();
  return conexaoConvertida;
}
async function excluirProdutos(id) {
  const conexao = await fetch(`https://json-server-orpin-one.vercel.app/produtos/${id}`, {
    method: "DELETE",
  });
  return conexao.ok;
}

export const conectaApi = {
  listaDeProdutos,
  adicionarProdutos,
  excluirProdutos,
};
