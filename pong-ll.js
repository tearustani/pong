var st; //startriger
var score1 = 0;//unten
var score2 = 0;//oben
var x = width/2;
var y = 300;
var dx = 5;
var dy = 5;
var lx1,lx2;
 
function start(){ 
    background(0,0,0);
    textAlign(CENTER);
    fill(255);
    strokeWeight(10);
    textSize(50);
    text("Pong",width/2,height/2-100);
    textSize(20);
    text("Press Space to start",width/2,height/2+50);
}
function ball(x,y){
    noFill();
    stroke(255);
    strokeWeight(3);
    strokeWeight(3);  
    ellipse(x,y,40,40);
}
function keyPressed(){
    if(keyCode == 32){
        st = 1;
        clear();
        game();
    }
}
function game(){
clear(); 
ball();
background(0);
strokeWeight(5);
line(lx1-30,height,lx1+30,height);//unten
line(lx2-30,0,lx2+30,0);//oben
strokeWeight(3);
line(0,height/2,width,height/2);//mitte
x = x + dx;
y = y + dy;
ball(x,y);

    // player movement with the mouse*/
    if (mouseY>height/2){
        lx1=mouseX;
    }
    else if (mouseY<height/2){
            lx2=mouseX;
    }
    //ball direction change and scores*/
    if (x>= width-20 || x<=20){
        dx=-dx;
       
    }
    if(y>=height-20 || y<=20 || x<=lx1-30 && x>=lx1+30){
        dy=-dy;
       
    }
}
function draw(){
start();
    if (st==0){
        start();
    }
    else if (st==1){
    game();
    if (x<=lx1+30 && x>lx2-30 && y >= height-20){    
        score2 = score2+1;
     } 
     if(x<=lx1+30 && x>=lx2-30 && y <= 20){    
        score1=score1+1;
    }
        
        textSize(40);
        stroke(255);
        fill(255);
        strokeWeight(1);
        text(" "+ score1,450,height/2 + 200);//unten
        text(" "+ score2,450,height/2 - 200);//oben


    }
    //else if (st==2){
      //  clear();
        //textAlign(CENTER);
        //textSize(30);
        //textStyle(ITALIC);
        //fill(0);
        //text("You Win!!!",450,height/2 + 200);//unten gewonnen
    //}
    //else if (st==3){
      //  clear();
        //textAlign(CENTER);
        //textSize(30);
        //textStyle(ITALIC);
        //fill(0);
        //text("You Win!!!",450,height/2 - 200);// oben gewonnen

//    }

}  
print("score1" +score1);
print ("score2" +score2); 