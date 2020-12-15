class Divisions{

constructor(x,y,w,h){

var options ={

    isStatic: true

}
this.body = Bodies.rectangle(x,y,w,h,options);
this.w=w;
this.h=h;
var divisions = [];
World.add(world ,this.body);

}
display(){

    for (var k = 0; k <=innerWidth; k = k + 80){
        divisions.push(new Divisions(k, height- divisionHeight/2, 10, divisionHeight));
      }
      for (var k = 0; k <=innerWidth; k = k + 160){
        divisions.push(new Divisions(k, height- divisionHeight/2, 10, divisionHeight));
      }
      for (var k = 0; k <=innerWidth; k = k + 240){
        divisions.push(new Divisions(k, height- divisionHeight/2, 10, divisionHeight));
      }
      for (var k = 0; k <=innerWidth; k = k + 320){
        divisions.push(new Divisions(k, height- divisionHeight/2, 10, divisionHeight));
      }
      for (var k = 0; k <=innerWidth; k = k + 400){
        divisions.push(new Divisions(k, height- divisionHeight/2, 10, divisionHeight));
      }
      for (var k = 0; k <=innerWidth; k = k + 480){
        divisions.push(new Divisions(k, height- divisionHeight/2, 10, divisionHeight));
      }
      for (var k = 0; k <=innerWidth; k = k + 560){
        divisions.push(new Divisions(k, height- divisionHeight/2, 10, divisionHeight));
      }
      for (var k = 0; k <=innerWidth; k = k + 640){
        divisions.push(new Divisions(k, height- divisionHeight/2, 10, divisionHeight));
      }
      for(var k = 0; k <divisions.length;k++){
          divisions[k].display();
      }
    
    var pos = this.body.position;
    rectMode(CENTRE);
    fill("white");
    rect(pos.x , pos.y , this.w , this.h);
}
};