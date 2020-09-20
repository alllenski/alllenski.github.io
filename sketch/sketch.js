
class SquareShape {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
    }
}
  
let squares = [];
  
let i;
for (i = 0; i < 8; i++) {
    let j;
    for (j = 0; j < 8; j++) {
        let createdSquare = new SquareShape(i * 20, j * 20, 20);
        squares.push(createdSquare);
    }
}
  
function setup() {
    var canvas = createCanvas(640, 640);
 
    // Move the canvas so it’s inside our <div id="sketch-holder">.
    canvas.parent('#content');
    
}
  
function draw() {
    background(220);
    fill(255, 255, 255);
    let i;
    for (i = 0; i < squares.length; i++) {
        square(squares[i].x, squares[i].y, squares[i].size);
    }
    
}