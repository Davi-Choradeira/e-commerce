<template>
    <div class="carrinho bg-gray-900 p-6 rounded-lg text-white">
      <h2 class="text-2xl font-bold mb-4">🛒 Carrinho de Compras</h2>
      
      <ul v-if="carrinho.length > 0">
        <li v-for="(produto, index) in carrinho" :key="index" class="mb-2">
          <span class="text-lg">{{ produto.nome }}</span> - 
          <span class="text-green-400">R$ {{ produto.preco }}</span>
        </li>
      </ul>
  
      <p v-else class="text-gray-400">Seu carrinho está vazio! 🛍️</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  
  const carrinho = ref([]);
  
  // 🚀 Função para buscar os produtos do carrinho
  async function buscarCarrinho() {
    try {
      const response = await fetch("http://127.0.0.1:3000/carrinho");
      const data = await response.json();
      carrinho.value = data;
    } catch (error) {
      console.error("Erro ao carregar o carrinho:", error);
    }
  }
  
  // 🚀 Atualiza os produtos do carrinho ao carregar a página
  onMounted(() => {
    buscarCarrinho();
  });
  </script>