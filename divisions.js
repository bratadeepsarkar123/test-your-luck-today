class Divisions {
    constructor(x, y, w, h) {
        var options = {

            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        this.i=color(random(20,255),random(20,255),random(20,255))
        World.add(world, this.body);
    }
    display() {
        var f=color(random(0,255),random(0,255),random(0,255))
        var pos = this.body.position;
        rectMode(CENTER);
        if(g==1){
            fill(this.i)
        }else{
            fill(f)
        }
        rect(pos.x, pos.y, this.w, this.h);
    }
};