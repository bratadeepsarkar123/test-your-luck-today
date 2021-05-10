class Plinko {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:true
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
       this.i=color(random(20,255),random(20,255),random(20,255))
        this.v=255
        World.add(world, this.body);
    }
    display() {
        var f=color(random(0,255),random(0,255),random(0,255))
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        if(g==1){
            fill(this.i)
        }else{
            fill(f)
            this.v=this.v-1
            tint(255,this.v)
        }
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();

       
    }

};