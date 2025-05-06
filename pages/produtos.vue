<template>
    <div class="container mx-auto p-8 bg-gelo text-preto rounded-lg shadow-lg">
      <h1 class="text-3xl font-bold mb-6 text-center">🛍️ Lista de Produtos</h1>
      
      <!-- Botão "🏠 Início" destacado -->
      <NuxtLink to="/" class="bg-verdeNeon text-black text-lg font-bold px-6 py-3 rounded-lg border-2 border-black hover:bg-green-500 transition block w-fit mx-auto mb-6 shadow-lg flex items-center justify-center gap-2">
        🏠 Início
      </NuxtLink>
  
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="produto in produtos"
          :key="produto.id"
          class="relative p-6 bg-cinzaClaro rounded-lg shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer text-center"
        >
          <!-- Efeito Neon -->
          <div class="absolute inset-0 rounded-lg blur-xl opacity-50" :style="{ backgroundColor: produto.corNeon }"></div>
  
          <NuxtLink :to="'/produto/' + produto.id" class="block relative z-10">
            <div class="text-6xl mb-4">{{ produto.emoji }}</div> <!-- Emoji do produto -->
            <div class="text-xl font-bold">{{ produto.nome }}</div>
            <p class="text-gray-300">R$ {{ produto.preco }}</p>
          </NuxtLink>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const produtos = [
    { id: 1, nome: "Camiseta", preco: 25, emoji: "👕", corNeon: "#39FF14" },
    { id: 2, nome: "Tênis", preco: 100, emoji: "👟", corNeon: "#FF1493" },
    { id: 3, nome: "Relógio", preco: 200, emoji: "⌚", corNeon: "#00FFFF" },
    { id: 4, nome: "Mochila", preco: 150, emoji: "🎒", corNeon: "#FFD700" },
    { id: 5, nome: "Óculos de Sol", preco: 80, emoji: "🕶️", corNeon: "#FF4500" },
    { id: 6, nome: "Fone de Ouvido", preco: 120, emoji: "🎧", corNeon: "#8A2BE2" }
  ];
  </script>