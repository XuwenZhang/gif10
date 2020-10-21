
function setup() {
  createCanvas(600, 600);
  for(let i= 0; i<boxes.length; i++){
    boxArray[i] = new BoxMoved(boxes[i]);
  }

  for(let i= 0; i<circles.length; i++){
    circleArray[i] = new CircleMoved(circles[i]);
  }

  for(let i= 0; i<triangles.length; i++){
    triangleArray[i] = new TriangleMoved(triangles[i]);
  }

}

function draw() {
  background([200,200,240]);

  for (let i= 0; i< boxes.length; i++){
    boxArray[i].drawBox();

  }



  for (let i= 0; i< circles.length; i++){
    circleArray[i].drawCircle();

  }

  rotate(angle);
  angle = angle + speed

  for (let i= 0; i< triangles.length; i++){
    triangleArray[i].drawTriangle();
  }




}
