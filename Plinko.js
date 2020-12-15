class Plinko{
    constructor(x,y,r){
        var options = {
            restitution:0.4
        }
        this.r=r;
    
        this.body = Bodies.circle(x,y,r,options);
        World.add(world, this.body);
        var plinkos = [];
    }
    display(){
      
        for(var j = 40; j<=width; j=j+50)
        {
            plinkos.push(new plinko(j,75));
        }
       
        for(var j = 15; j <=width-10; j=j+50)
        {
            plinkos.push(new Plinko(j,175));
        }

        for(var j = 65; j <=width-10; j=j+50)
        {
            plinkos.push(new Plinko(j,275));
        }

        for(var j = 90; j <=width-10; j=j+50)
        {
            plinkos.push(new Plinko(j,375));
        }

        for (var j = 0; j < plinkos.lenght; j++){
            plinkoss[j].display();
        }
        var pos = this.body.position;
        var angle = this.body.angle;
    
        push();
        translate(pos.x , pos.y);
        rotate(angle);
        //imageMode(CENTRE);
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();
    
    }
    };