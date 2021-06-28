
class Wood {
    constructor(x, y, w, h, a) {
      var options = {
        isStatic:true,
        restitution: 0.8,
        friction: 0.3,
        density: 1,
      };
  
      this.body = Bodies.rectangle(x, y, w, h, options);
      Matter.Body.setAngle(this.body, a);
      this.width = w;
      this.height = h;
      World.add(world, this.body);
    }
    display() {
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill("green");
      stroke("yellow");
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
    }
  }
  