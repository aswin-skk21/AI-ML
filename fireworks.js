class Fireworks {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = canvas.getContext("2d");
      this.particles = [];
    }
  
    start() {
      this.createFireworks();
      this.animate();
    }
  
    createFireworks() {
      for (let i = 0; i < 50; i++) {
        const color = `${Math.floor(Math.random() * 255)}, ${Math.floor(
          Math.random() * 255
        )}, ${Math.floor(Math.random() * 255)}`;
        this.particles.push(new Particle(this.canvas.width / 2, this.canvas.height / 2, color));
      }
    }
  
    animate() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.particles.forEach((particle, index) => {
        if (particle.life <= 0 || particle.opacity <= 0) {
          this.particles.splice(index, 1);
        } else {
          particle.update();
          particle.draw(this.ctx);
        }
      });
      requestAnimationFrame(this.animate.bind(this));
    }
  }
  
  class Particle {
    constructor(x, y, color) {
      this.x = x;
      this.y = y;
      this.color = color;
      this.size = Math.random() * 4 + 1;
      this.speedX = Math.random() * 6 - 3;
      this.speedY = Math.random() * 6 - 3;
      this.life = 100;
      this.opacity = 1;
    }
  
    draw(ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
      ctx.fill();
      ctx.closePath();
    }
  
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.size -= 0.02;
      this.life--;
      this.opacity -= 0.01;
  
      if (this.size < 0) this.size = 0;
    }
  }