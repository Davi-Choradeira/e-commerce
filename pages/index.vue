<template>
    <div class="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 class="text-4xl font-bold text-blue-600 mb-6">Bem-vindo à Loja Minimalista</h1>
      <ul class="space-y-4">
        <li v-for="produto in produtos" :key="produto.id" class="bg-white shadow-md p-4 rounded-lg">
          <NuxtLink :to="`/produto/${produto.id}`" class="text-lg font-semibold text-gray-700 hover:text-blue-500">
            {{ produto.nome }} - {{ produto.preco }}€
          </NuxtLink>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  const produtos = [
    { id: 1, nome: "Camiseta", preco: 25 },
    { id: 2, nome: "Tênis", preco: 100 },
    { id: 3, nome: "Relógio", preco: 200 }
  ];
  </script>