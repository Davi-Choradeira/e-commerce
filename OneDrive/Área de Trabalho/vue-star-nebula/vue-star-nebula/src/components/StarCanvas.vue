<template>
    <canvas ref="canvas"></canvas>
  </template>
  
  <script>
  import { defineComponent, onMounted, ref } from "vue";
  
  export default defineComponent({
    setup() {
      const canvas = ref(null);
  
      onMounted(() => {
        const ctx = canvas.value.getContext("2d");
  
        canvas.value.width = window.innerWidth;
        canvas.value.height = window.innerHeight;
  
        let stars = [];
        for (let i = 0; i < 150; i++) {
          stars.push({
            x: Math.random() * canvas.value.width,
            y: Math.random() * canvas.value.height,
            radius: Math.random() * 2,
            speed: Math.random() * 0.5 + 0.2,
            opacity: Math.random() * 0.5 + 0.5
          });
        }
  
        function animateStars() {
          ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);
          ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
          stars.forEach(star => {
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fill();
            star.y += star.speed;
            if (star.y > canvas.value.height) star.y = 0;
          });
          requestAnimationFrame(animateStars);
        }
  
        animateStars();
  
        canvas.value.addEventListener("mousemove", (event) => {
          stars.forEach(star => {
            const dx = event.clientX - star.x;
            const dy = event.clientY - star.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 100) {
              star.x -= dx * 0.05;
              star.y -= dy * 0.05;
            }
          });
        });
      });
  
      return { canvas };
    }
  });
  </script>
  
  <style scoped>
  canvas {
    position: absolute;
    top: 0;
    left: 0;
  }
  </style>