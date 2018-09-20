//Global variables
var squares = [];
var s = 800;
// setup code
function setup() {
  var cnv = createCanvas(s, s);
  cnv.position((windowWidth-width)/2, 30);
  background(0, 0, 0);
  loadSquares(8);
}
function draw() {
  background(0, 0, 0);
  for (i = 0; i < squares.length; i++){
  squares[i].run();
  }
}
function loadSquares(numSquares){
  var a = 0;
  var b = (s/numSquares);
  //
  for (var i = 0; i < numSquares; i++){
    for (var c = 0; c < numSquares; c++){
      if (c%2 === 0)
      {
        var x = (a);
        var y = ((s/numSquares)*i);
        var sz = (s/numSquares, s/numSquares);
        var col = (255, 255, 255);
        squares.push(new Square(x, y, sz, col))
        a = a + ((s/numSquares)*2);
      }
    else {
      var x = (b);
      var y = ((s/numSquares)*i);
      var sz = (s/numSquares, s/numSquares);
      var col = (0, 0, 0);
      squares.push(new Square(x, y, sz, col))
      b = b + ((s/numSquares)*2);
    }
  }
    if (i%2 === 0)
    {
      a = (s/numSquares);
      b = 0;
    }
    else
    {
      a = 0;
      b = (s/numSquares);
    }
  }
}
