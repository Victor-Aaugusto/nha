function calcularTotal(livros) {
  return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2);
}

const test = document.getElementById("test");
