var ground;
var particals = [];
var plinkos = [];
var divisions = [];
function setup() {
  createCanvas(800,400);
  ground = new Ground(200, 480, 480, 10);
  var divitionsHieght=300;

  for(var k = 0; k <=width; k = k + 80){
    divitions.push(new Divisions(k, height - divitionsHieght/2, 10, divitionsHieght));
  }

  for (var j = 40; j <=width; j=j+50){
    plinkos.push(new Plinko(j,75));
  }
  for (var j = 15; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,175));
  }


}

function draw() {
  background(255,255,255);  
  for (var j = 0; j < particals.length; j ++){
    particals[j].display();
  }
  for (var k = 0; k < divisions.length; k ++){
    divitions[k].display();
  }
}