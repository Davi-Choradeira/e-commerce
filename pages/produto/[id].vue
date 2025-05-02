<template>
    <div class="p-6 bg-white shadow-md rounded-lg">
      <h1 class="text-2xl font-bold">{{ produto.nome }}</h1>
      <p class="text-gray-600 text-lg">Preço: {{ produto.preco }}€</p>
      <NuxtLink to="/" class="text-blue-500 hover:underline">Voltar para a loja</NuxtLink>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from "vue-router";
  
  const route = useRoute();
  
  const produtos = [
    { id: 1, nome: "Camiseta", preco: 25 },
    { id: 2, nome: "Tênis", preco: 100 },
    { id: 3, nome: "Relógio", preco: 200 }
  ];
  
  const produto = produtos.find((p) => p.id == route.params.id);
  </script>