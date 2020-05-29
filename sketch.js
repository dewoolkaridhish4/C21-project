var wall,thickness; 
var bullet,speed,weight;

 function setup() { 
      createCanvas(1600,400);

      thickness=random(22,83);

      bullet=createSprite(50,200,50,50); 
      wall=createSprite(1317,183,thickness,height/2); 
      wall.shapeColor=color(80,80,80);
      
      speed=random(223,321); 
      weight=random(30,52);

      bullet.velocityX=speed;
   } 

   function draw() { 
     background(0);

     text("x:"+mouseX,50,75);
     text("y:"+mouseY,50,100);

     if(bullet.x>1276){
        bullet.x=1276;
     }
      
     if(hasCollided(bullet,wall)){
       bullet.velocityX=0;
       var damage=0.5 *weight *speed *speed/(thickness *thickness *thickness);

       fill("pink"); 
       textSize(19);
       text("Damage:"+Math.round(damage),1095,348);

       if(damage>10){
         wall.shapeColor=color(255,0,0);
       }

       if(damage<10){
        wall.shapeColor=color(0,255,0);
       }
     }

  fill("red");
  textSize(19); 
  text("Damage>10, the wall is not effective against bullets",51,276);

  fill("green");
  textSize(19);
  text("Damage<10, the wall is effective against bullets",51,302);

  fill("purple");
  textSize(30);
  text("BULLETS AND WALLS",595,30);

  fill("purple"); 
  textSize(20);
  text("This is a simulator to check wall effectiveness",555,61);

  drawSprites();
}
  
      function hasCollided(lbullet,lwall){
       bulletRightEdge=lbullet.x +lbullet.width;
       wallLeftEdge=lwall.x;
       if(bulletRightEdge>=wallLeftEdge){
         return true;
       }
       return false;
    }
