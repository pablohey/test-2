let campoIdade;

function setup() {
  createCanvas(400, 400);
  campoIdade = createInput("16");
}

function draw() {
  background(220);
  let idade = campoIdade.value();
  let recomendacao = geraRecomendacao(idade);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade) {
  if(idade >= 10) {
    if(idade >= 18) {
      return "Stranger things";
    } else {
      return "Outer banks";
    }
  } else {
    return "teem wolf";
  }
}