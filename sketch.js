let waves = [];
let counter = 0;
var f = [];
function setup() {
  createCanvas(windowWidth, 400);
  for (let i = 0; i < 1; i++) {
    waves[0] = new Wave(random(20, 80), random(100, 600), random(TWO_PI));
  }
  b = createButton("Add wave");
  b.position(0, 0);
  b.mousePressed(bpressed);
//  a = createElement("Wave" + counter);
}

function bpressed() {
  counter++;
  console.log(counter)
    createCanvas(windowWidth, 400+100*counter);

  // console.log(counter)
//  createCanvas(600, 400 + 100 * counter);
  waves[counter] = new Wave(random(20, 80), random(100, 600), random(TWO_PI));
}

function draw() {
  background(0);
 // for (let c = 0; c < counter; c++) {
    for (let x = 0; x < width; x += 10) {
      let y = 0;
      for (let i = 1; i < waves.length; i++){
        y += waves[i].evaluate(x);

      noStroke();
      ellipse(x, waves[i].evaluate(x)+100*(i)+200,5)
      }
      fill(10,230,309)
     ellipse(x, y+150, 16)
    }

  for (let wave of waves) {
    wave.update();
  }
}