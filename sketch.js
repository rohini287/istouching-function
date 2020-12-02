var box1,box2;
var box3,box4;

function setup() {
  createCanvas(800,400);
 box1= createSprite(400, 200, 20, 50);
 box2=createSprite(200,200,70,70);
 box3=createSprite(300,200,70,70);
 box4=createSprite(400,200,50,50);
 box1.shapeColor="green";
 box2.shapeColor="green";
 box3.shapeColor="green";
 box4.shapeColor="green";
 box1.debug=true;
 box2.debug=true;
 box3.debug=true;
 box4.debug=true;
}

function draw() {
  background(0);  
  box1.x=mouseX;
  box1.y=mouseY;
//function with parameter
 if ( isTouching(box1,box4) ){
  box1.shapeColor="red";
  box4.shapeColor="red";
 }
 else{
  box1.shapeColor="green";
  box4.shapeColor="green";
 }


  drawSprites();
}


//function definition
function isTouching(object1,object2){
  if (object1.x-object2.x<object2.width/2+object1.width/2
    && object2.x-object1.x<object2.width/2+object1.width/2
    &&object1.y-object2.y<object2.height/2+object1.height/2
    && object2.y-object1.y<object2.height/2+object1.height/2){
     return true;
    }
    else {
     return false;
    }
}


//function with argument list