
let canvas;
let xP = 0;
let yP = 0;
let easing = .05;

function setup(){
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style("z-index");
    // background(0, 0);
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function draw(){
    clear();

    xP = xP + ((mouseX - xP) * easing);
    yP = yP + ((mouseY - yP) * easing);

    drawThing(xP, yP);
}

function drawThing(_x, _y){

    // left leg
    fill(255,0,0);
    ellipse(_x-30, _y+75, 30, 55);

    // right leg
    fill(255,0,0);
    ellipse(_x-10, _y+75, 30, 55);

    // backpack
    fill(255,0,0);
    ellipse(_x-50, _y+45, 30, 55);

    // body
    strokeWeight(5);
    fill(255,0,0);
    ellipse(_x-20, _y+45, 65, 90);

    // eye
    fill(255);
    ellipse(_x-5, _y+25, 40, 20);
}