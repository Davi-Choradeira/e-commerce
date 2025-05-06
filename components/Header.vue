<template>
  <header class="relative bg-[#1E1E1E] py-6 text-center shadow-lg border-b-2 border-cinzaClaro flex justify-between items-center px-6">
    
    <!-- Logo premium com efeito refinado -->
    <div class="logo-container relative">
      <div class="logo-circle">Dev</div>
      <div class="absolute inset-0 rounded-full blur-md opacity-30 animate-glow" style="background-color: #39FF14;"></div>
      <div class="absolute inset-0 rounded-full opacity-20 animate-pulse" style="background-color: rgba(255, 255, 255, 0.1);"></div>
    </div>

    <!-- Campo de busca -->
    <div class="search-container w-full max-w-lg flex items-center gap-2">
      <input 
        type="text" 
        v-model="searchQuery" 
        placeholder="🔍 Buscar produtos..." 
        class="w-full px-4 py-2 rounded-lg bg-cinzaClaro text-preto border border-gray-600 focus:outline-none focus:border-verdeNeon"
      />
      <button @click="buscarProduto" class="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition shadow-lg">
        Buscar
      </button>
    </div>

    <!-- Ícone do carrinho fixo à direita -->
    <div class="cart-icon cursor-pointer text-3xl text-white hover:scale-110 transition">
      🛒
    </div>

  </header>
</template>

<script setup>
import { ref } from 'vue';

const searchQuery = ref("");

const buscarProduto = () => {
  if (searchQuery.value) {
    window.location.href = `/produtos?search=${searchQuery.value}`;
  }
};
</script>


<style>
.logo-container {
  width: 100px;
  height: 100px;
  position: relative;
}
.logo-circle {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: radial-gradient(circle, rgb(0, 0, 0) 30%, #1E1E1E 100%);
  color: white;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease-in-out;
}
.logo-circle:hover {
  transform: scale(1.15);
}

/* Efeito de brilho premium */
@keyframes glow {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; transform: scale(1.05); }
}

.search-container {
  display: flex;
  align-items: center;
  gap: 10px;
}
.cart-icon {
  font-size: 30px;
  transition: transform 0.2s;
}
.cart-icon:hover {
  transform: scale(1.2);
}
</style>