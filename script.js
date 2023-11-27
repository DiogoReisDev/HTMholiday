function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  noStroke();
}

function draw() {
  background(0);

  // Desenha estrelas
  drawStars();

  // Desenha efeito de plasma
  drawPlasma();
}

function drawStars() {
  fill(255);
  for (let i = 0; i < 100; i++) {
    const x = random(width);
    const y = random(height);
    ellipse(x, y, 2, 2);
  }
}

function drawPlasma() {
  fill('#fffc00');
  const plasmaSize = 100;
  const x = mouseX;
  const y = mouseY;
  ellipse(x, y, plasmaSize, plasmaSize);
}

