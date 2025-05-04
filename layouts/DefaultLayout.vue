<template>
    <div class="bg-gray-900 text-white min-h-screen flex flex-col">
      <Navbar />
      <main class="flex-1 container mx-auto p-6">
        <slot /> <!-- Aqui será inserido o conteúdo de cada página -->
      </main>
      <Footer />
    </div>
  </template>
  
  <script setup>
  import Navbar from '@/components/Navbar.vue';
  import Footer from '@/components/Footer.vue';
  </script>