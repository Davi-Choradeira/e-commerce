<template>
    <div class="nebula-container">
      <div class="nebula">
        <h1 class="ufo-text">UFO</h1>
      </div>
    </div>
  </template>
  
  <script>
  import { defineComponent } from "vue";
  
  export default defineComponent({});
  </script>
  
  <style scoped>
  .nebula-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  .nebula {
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(0, 255, 100, 1) 15%, rgba(0, 200, 50, 0.8) 50%, rgba(0, 100, 0, 0.5) 80%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: neonGlow 2s infinite alternate;
  }
  
  .ufo-text {
    font-size: 30px;
    font-weight: bold;
    color: white;
    text-shadow: 
      0 0 15px rgba(0, 255, 100, 1), 
      0 0 30px rgba(0, 255, 50, 0.9), 
      0 0 45px rgba(0, 255, 50, 0.7), 
      0 0 60px rgba(0, 255, 50, 0.5);
    animation: flicker 1s infinite alternate;
  }
  
  @keyframes neonGlow {
    0% {
      box-shadow: 
        0 0 30px rgba(0, 255, 100, 1), 
        0 0 60px rgba(0, 255, 50, 0.9);
    }
    100% {
      box-shadow: 
        0 0 50px rgba(0, 255, 100, 1), 
        0 0 80px rgba(0, 255, 50, 1);
    }
  }
  
  @keyframes flicker {
    0% {
      text-shadow: 
        0 0 15px rgba(0, 255, 100, 1), 
        0 0 30px rgba(0, 255, 50, 0.9);
    }
    100% {
      text-shadow: 
        0 0 30px rgba(0, 255, 100, 1), 
        0 0 45px rgba(0, 255, 50, 1);
    }
  }
  </style>