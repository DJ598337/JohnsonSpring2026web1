let popcorn = [];

function setup() {
  let canvas = createCanvas(800, 400);

  // 🔥 THIS attaches it to your website div
  canvas.parent("filmanimation");

  noStroke();

  for (let i = 0; i < 60; i++) {
    popcorn.push(new Popcorn());
  }
}

function draw() {
  clear(); // keeps background transparent

  for (let p of popcorn) {
    p.update();
    p.display();
  }
}

class Popcorn {
  constructor() {
    this.x = random(width);
    this.y = random(-height);
    this.size = random(10, 18);
    this.speed = random(1, 3);
    this.sway = random(0.5, 2);
    this.offset = random(1000);
    this.rot = random(TWO_PI);
  }

  update() {
    this.y += this.speed;
    this.x += sin(frameCount * 0.01 + this.offset) * this.sway;

    if (this.y > height) {
      this.y = random(-50, 0);
      this.x = random(width);
    }
  }

  display() {
    push();
    translate(this.x, this.y);
    rotate(this.rot);

    let s = this.size;

    fill(255, 245, 200);
    ellipse(0, 0, s, s);
    ellipse(s * 0.3, -s * 0.2, s * 0.8);
    ellipse(-s * 0.3, -s * 0.1, s * 0.8);
    ellipse(0, s * 0.3, s * 0.9);

    fill(255, 255, 255, 80);
    ellipse(-s * 0.2, -s * 0.2, s * 0.4);

    pop();
  }
}