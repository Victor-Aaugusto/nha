const btnOrdenarPorPreco = document.getElementById("btnOrdenarPorPreco");

btnOrdenarPorPreco.addEventListener("click", ordenarLivrosPorPreco);

function ordenarLivrosPorPreco() {
  let livrosOrdenadors = livros.sort(
    (a, b) => parseFloat(a.preco) - parseFloat(b.preco)
  );
  exibirLivrosNaTela(livrosOrdenadors);
}
