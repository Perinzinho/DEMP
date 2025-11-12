

const texto = `Com o início da ditadura em 1964, diversos departamentos foram criados com o propósito de garantir a ordem e a paz no país. 
Entre eles surgiu o DEMP — Departamento de Extermínio de Manifestações Paranormais. 
Formado por agentes altamente treinados em combate e contenção, o DEMP tem como missão identificar, caçar e neutralizar ameaças sobrenaturais, assegurando a segurança da nação e o controle sobre o desconhecido.
Vivendo vidas duplas, os agentes do DEMP lutam contra o paranormal em segredo, assegurando a paz e detendo aqueles que tentam trazer os Grandes Deuses Antigos de volta.`;

const elemento = document.getElementById('texto');

let indice = 0; // agora fora da função

function escreverTexto() {
  if (indice < texto.length) {
    const char = texto.charAt(indice);

    // Se for quebra de linha no texto original
    if (char === '\n') {
      elemento.innerHTML += '<br>';
    } else {
      elemento.innerHTML += char;
    }

    indice++;
    setTimeout(escreverTexto, 25); // ajuste a velocidade se quiser
  }
}

escreverTexto();

console.log("Eu lhe orderno a [redigido]")


  const imagem = document.getElementById("logo");

  imagem.addEventListener("click", () => {
    alert("Será que eles realmente são quem eles dizem ser?");
  });