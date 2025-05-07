<template>
    <div class="container mx-auto p-8 text-white">
      <h2 class="text-3xl font-bold mb-4">Produto Selecionado</h2>
      <div v-if="produto">
        <h3 class="text-2xl">{{ produto.nome }}</h3>
        <p class="text-lg text-green-400">Preço: R$ {{ produto.preco }}</p>
        <button 
          class="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600 transition"
          @click="adicionarAoCarrinho"
        >
          🛒 Comprar Agora
        </button>
      </div>
  
      <h2 class="text-2xl font-bold mt-8">🛍️ Carrinho de Compras</h2>
      <ul v-if="carrinho.length > 0">
        <li v-for="(item, index) in carrinho" :key="index" class="mb-2">
          <span class="text-lg">{{ item.nome }}</span> - 
          <span class="text-green-400">R$ {{ item.preco }}</span>
        </li>
      </ul>
  
      <p v-else class="text-gray-400">Seu carrinho está vazio! 🛍️</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import { useRoute } from "vue-router";
  
  const route = useRoute();
  const produtos = [
    { id: 1, nome: "Camiseta", preco: 25 },
    { id: 2, nome: "Tênis", preco: 100 },
    { id: 3, nome: "Relógio", preco: 200 }
  ];
  
  const produto = ref(produtos.find((p) => p.id == route.params.id));
  const carrinho = ref([]);
  
  // 🚀 Buscar os produtos do carrinho ao carregar a página
  async function buscarCarrinho() {
    try {
      const response = await fetch("http://127.0.0.1:3000/carrinho");
      const data = await response.json();
      carrinho.value = data;
    } catch (error) {
      console.error("Erro ao carregar o carrinho:", error);
    }
  }
  
  // 🚀 Adicionar produto ao carrinho
  async function adicionarAoCarrinho() {
    try {
      const response = await fetch("http://127.0.0.1:3000/adicionar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: produto.value.nome,
          preco: produto.value.preco
        })
      });
  
      await buscarCarrinho(); // Atualizar lista do carrinho após adicionar item
    } catch (error) {
      console.error("Erro ao adicionar ao carrinho:", error);
    }
  }
  
  // 🚀 Atualiza os produtos do carrinho ao carregar a página
  onMounted(() => {
    buscarCarrinho();
  });
  </script>