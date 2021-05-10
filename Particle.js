class Particle {
    constructor(x, y,r) {

        var options ={
            restitution:0.4
        }
        this.r=r;
        
        this.o=true;
        //this.s=0;
      
        this.body = Bodies.circle(x, y, this.r,options);       
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);

    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;
      //  var s=0;
      if(pos.y<height-150){
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop()
      }
        if(pos.y>height-150 && this.o===true){
            score++
            if((pos.x>0 && pos.x<=80) || (pos.x>720 && pos.x<=800)){
            s=s+100
           
            }else if((pos.x>80 && pos.x<=160)|| (pos.x>640 && pos.x<=720)){
                s=s+200
            }else if((pos.x>160 && pos.x<=240)|| (pos.x>560 && pos.x<=640)){
                s=s+300
            }else if((pos.x>240 && pos.x<=320)|| (pos.x>480 && pos.x<=560)){
                s=s+400
            }else if((pos.x>320 && pos.x<=400)|| (pos.x>400 && pos.x<=480)){
                s=s+500
            }
            World.remove(world,this.body)
            this.o=false;
        }
        

       
       
    }

};