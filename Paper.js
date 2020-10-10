class Paper{
    constructor(x,y,diameter){
    var options = {
    isStatic:false,
        restitution:0.3, 
        friction:1,
        density:2.4
    }
    this.body = Bodies.circle(x, y,diameter/2, options)
    this.diameter = diameter;
    World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
      
        push();
        translate(pos.x,pos.y);
        fill("yellow")

        ellipseMode(RADIUS);
        ellipse(0,0,this.diameter,this.diameter);
        pop();
      }
    };
    