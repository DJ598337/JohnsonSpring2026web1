let flash = 0;

function setup() {
  let canvas = createCanvas(900, 500);
  canvas.parent("theaterCanvas");
}

function draw() {

  background(10);

  // SCREEN FLASH
  flash = random(180, 255);

  // MOVIE SCREEN
  fill(flash);
  rect(200, 50, 500, 220);

  // SCREEN GLOW
  fill(255, 255, 255, 30);
  rect(180, 30, 540, 260);

  // SEATS ROW 1
  fill(120, 0, 0);

  for (let x = 120; x < width; x += 120) {
    rect(x, 340, 70, 70, 10);
  }

  // SEATS ROW 2
  for (let x = 60; x < width; x += 120) {
    rect(x, 420, 70, 70, 10);
  }

  // SCREEN TEXT
  fill(0);
  textSize(40);
  textAlign(CENTER);
  text("NOW SHOWING", width / 2, 170);
  
  // LIGHT BEAMS
  fill(255,255,255,15);
  triangle(450, 270, 100, 500, 800, 500);
}