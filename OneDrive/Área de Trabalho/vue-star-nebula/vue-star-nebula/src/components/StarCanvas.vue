<template>
    <canvas ref="starCanvas" class="star-background"></canvas>
  </template>
  
  <script>
  export default {
    mounted() {
      this.setupCanvas();
      this.animateStars();
      window.addEventListener("mousemove", this.spreadStars);
    },
    methods: {
      setupCanvas() {
        this.canvas = this.$refs.starCanvas;
        this.ctx = this.canvas.getContext("2d");
  
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
  
        this.stars = Array.from({ length: 200 }).map(() => ({
          x: Math.random() * this.canvas.width,
          y: Math.random() * this.canvas.height,
          radius: Math.random() * 2.5,
          speed: Math.random() * 0.5 + 0.2
        }));
      },
      animateStars() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  
        this.stars.forEach(star => {
          star.y += star.speed;
          if (star.y > this.canvas.height) star.y = 0;
  
          this.ctx.fillStyle = "white";
          this.ctx.beginPath();
          this.ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
          this.ctx.fill();
        });
  
        requestAnimationFrame(this.animateStars);
      },
      spreadStars(event) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
  
        this.stars.forEach(star => {
          const dx = mouseX - star.x;
          const dy = mouseY - star.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
  
          if (distance < 100) {
            star.x += dx * 0.05; // 🔹 Movendo as estrelas para longe do mouse
            star.y += dy * 0.05;
          }
        });
      }
    }
  };
  </script>
  
  <style scoped>
  .star-background {
    position: fixed; /* 🔹 Garante que o fundo estrelado cubra toda a tela */
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: black;
    z-index: 1; /* 🔹 Mantém as estrelas atrás do conteúdo */
  }
  </style>