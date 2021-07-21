

var a = prompt('Enter the first number');
var b= prompt('Enter the second number');


function setup(){
createCanvas(400,400);

  var button= createButton("click to swap the number");
button.mousePressed(swap);
  }


function swap()
{
  [a,b] = [b,a];

  console.log(" Number a is"+a); console.log(" Number b is"+b);
 
}
