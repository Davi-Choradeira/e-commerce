<template>
    <div class="nebula-container">
      <StarCanvas />
      <div class="nebula-content">
        <h1 class="nebula-title">UFO</h1>
        <p class="nebula-description">Não estamos sozinhos...</p>
      </div>
    </div>
  </template>
  
  <script>
  import StarCanvas from "./StarCanvas.vue";
  
  export default {
    components: {
      StarCanvas
    }
  };
  </script>