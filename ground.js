class ground{
constructor(x,y){

    var option={
     isStatic= true,
     restitution:0.1

    }

   this.x=x
   this.y=y
   this.body=body.rectangle(this.x,this.y,600,20,option)
   World.add(world,this.body);
}
display();
}