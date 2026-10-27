function setup() {
  createCanvas(800, 800);
  background("white");
  frameRate(5);
}

function draw() {
  fill("#554B48")
  const outerColor = color("#554B48");
  const innerColor = color("#D5BD8D");
  const steps = 100;

  noStroke()
  for (let i = 0; i < steps; i++) {
    const t = i / (steps - 1);
    fill(lerpColor(outerColor, innerColor, t));
    ellipse(
      width / 2,
      height / 2 + 80,
      lerp(290, 2, t),
      lerp(430, 2, t)
    );
  }

  fill("#F6D4C2")
  noStroke()
  ellipse(width/2, height/2, 200, 220)

  fill("hotPink")
  rect(width/2 - 100, height/2 + 151, 200, 125)
  rect(width/2 - 145, height/2 + 175, 48, 101)
  rect(width/2 + 99, height/2 + 175, 48, 101)
  ellipse(width/2 - 110, height/2 + 178, 70, 60)
  ellipse(width/2 + 112, height/2 + 178, 70, 60)

  stroke("#a10e50")
  strokeCap(SQUARE)
  line(width/2 - 85, height/2 + 276, width/2 - 85, height/2 + 210)
  line(width/2 + 95, height/2 + 276, width/2 + 95, height/2 + 210)

  fill("#F6D4C2")
  noStroke()
  rect(width/2 - 29, height/2 + 50, 60, 100)

  fill("#F6D4C2")
  triangle(325, 550, 400, 600, 475, 550)

  fill("#F6D4C2")
  circle(width/2 - 100, height/2 + 10, 40)
  circle(width/2 + 100, height/2 + 10, 40)

  fill("#DB8B7F")
  arc(width/2 + 100, height/2 + 10, 20, 20, 30, 140);
  push()
  rotate(QUARTER_PI/2)
  arc(width/2 + 32, height/2 - 134, 20, 20, 70, 180);
  pop()

  fill("#554B48")
  noStroke()
  push()
  rotate(radians(45))
  rectMode(CENTER)
  rect(475, 1, 33, 165)
  pop()
  push()
  rotate(radians(315))
  rectMode(CENTER)
  rect(90, 565, 33, 165)
  pop()

  stroke("black")
  line(width/2 - 80, height/2 - 30, width/2 - 40, height/2)
  line(width/2 + 80, height/2 - 30, width/2 + 40, height/2)
  line(width/2 - 70, height/2 - 50, width/2 - 40, height/2 - 10)
  line(width/2 + 70, height/2 - 50, width/2 + 40, height/2 - 10)

  fill("white")
  noStroke()
  circle(width/2 - 40, height/2 - 10, 60)
  circle(width/2 + 40, height/2 - 10, 60)

  fill("blue")
  noStroke()
  circle(width/2 - 35, height/2 - 15, 30)
  circle(width/2 + 40, height/2 - 15, 30)

  fill("#DB8B7F")
  triangle(385, 440, 400, 395, 415, 440)

  noFill()
  stroke("hotPink")
  strokeWeight(5)
  arc(width/2, height/2 + 40, 80, 80, 0, PI, OPEN);
}