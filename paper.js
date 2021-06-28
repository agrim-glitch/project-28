class Paper{
    constructor(x,y,rad){
        var options = {
            isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2
        }
        this.body = Bodies.circle(x,y,rad,options);
        this.r = rad;
        this.image = loadImage("paper.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill('white');
        push();
        translate(pos.x,pos.y);
        ellipse(0,0,this.r*2,this.r*2);
        imageMode(CENTER);
        image(this.image,0,0,this.r*2.8,this.r*2.8);
        pop();
    }
}
