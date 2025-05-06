<template>
  <div class="container mx-auto p-8 flex flex-col items-center bg-gelo rounded-lg shadow-lg text-preto">
    <h2 class="text-3xl font-bold mb-4">{{ produto?.nome }}</h2>
    
    <!-- Emoji do produto -->
    <div class="text-6xl mb-6">{{ produto?.emoji }}</div> 

    <p class="text-lg text-gray-300 mb-4">Preço: R$ {{ produto?.preco }}</p>
    <p class="text-sm text-gray-400 mb-6">🚀 Envio rápido! Chega em até 3 dias úteis.</p>

    <!-- Botão de compra -->
    <button class="bg-verdeNeon text-black px-6 py-3 rounded-lg hover:bg-green-500 transition">
      🛒 Comprar Agora
    </button>

    <!-- Voltar para a lista de produtos -->
    <NuxtLink to="/produtos" class="block text-blue-400 hover:underline mt-6">
      ← Voltar para a Lista de Produtos
    </NuxtLink>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const produtos = [
  { id: 1, nome: "Camiseta", preco: 25, emoji: "👕" },
  { id: 2, nome: "Tênis", preco: 100, emoji: "👟" },
  { id: 3, nome: "Relógio", preco: 200, emoji: "⌚" },
  { id: 4, nome: "Mochila", preco: 150, emoji: "🎒" },
  { id: 5, nome: "Óculos de Sol", preco: 80, emoji: "🕶️" },
  { id: 6, nome: "Fone de Ouvido", preco: 120, emoji: "🎧" }
];

const produto = ref(produtos.find((p) => p.id == route.params.id));

// 🚀 Detecta mudanças no ID e atualiza o produto automaticamente
watch(() => route.params.id, (newId) => {
  produto.value = produtos.find((p) => p.id == newId);
});
</script>