class paper{
 constructor(x,y,r){
  var option ={
  isStatic=false,
  restitution:0.3,
  fiction:0.5,
  density:1.2

  }

 this.x=x
 this.y=y
 this.body=body.circle(this.x,this.y,this.r/2,option);
 World.add(world,this.body);
 }
 display(){

    var posi=this.body.position
 
    push()
    translate(posi.x,posi.y);
    rectmode(CENTER);
    strokeWeight(3);
    fill(255,0,255);
    eclipse(0,0,this.r,this.r);
   pop()

 }
 
 }