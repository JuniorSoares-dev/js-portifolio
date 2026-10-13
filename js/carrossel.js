const carrossel = document.querySelector(".projetos-carrossel");
const botaoAnterior = document.querySelector('[aria-label="Projeto anterior"]');
const botaoProximo = document.querySelector('[aria-label="Próximo projeto"]');

const indicadores = document.querySelectorAll(".carrossel-indicadores span");

let indiceAtual = 0;

function atualizarIndicadores(indiceAtual) {
  indicadores.forEach((indicador, indice) => {
    indicador.classList.remove("ativo");

    if (indice === indiceAtual) {
      indicador.classList.add("ativo");
    }
  });
}

botaoProximo.addEventListener("click", () => {
  if (indiceAtual < indicadores.length - 1) {
    carrossel.scrollLeft += carrossel.clientWidth;

    indiceAtual++;

    atualizarIndicadores(indiceAtual);
  }
});
botaoAnterior.addEventListener("click", () => {
  if (indiceAtual > 0) {
    carrossel.scrollLeft -= carrossel.clientWidth;

    indiceAtual--;

    atualizarIndicadores(indiceAtual);
  }
});
