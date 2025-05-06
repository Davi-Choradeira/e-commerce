<template>
  <nav class="relative bg-cinzaClaro p-6 text-preto flex flex-col items-center shadow-md rounded-lg">
    
    <!-- Menu de navegação -->
    <ul class="flex space-x-6 text-lg mb-4">
      <li class="hover-effect">
        <NuxtLink to="/">🏠 Início</NuxtLink>
      </li>
      <li class="hover-effect">
        <NuxtLink to="/produtos">🛍️ Produtos</NuxtLink>
      </li>
    </ul>

       <!-- Área principal com carrossel e categorias -->
    <div class="flex w-full max-w-4xl mt-6 gap-6">
      
      <!-- Categorias à esquerda -->
      <div class="w-1/4 bg-[#2A2A2A] p-4 rounded-lg shadow-md text-white">
        <h2 class="text-xl font-bold mb-4">Categorias</h2>
        <ul class="space-y-3">
          <li class="hover:scale-105 transition cursor-pointer">👕 Roupas</li>
          <li class="hover:scale-105 transition cursor-pointer">👟 Calçados</li>
          <li class="hover:scale-105 transition cursor-pointer">⌚ Acessórios</li>
          <li class="hover:scale-105 transition cursor-pointer">🕶️ Óculos</li>
        </ul>
      </div>

      <!-- Carrossel sem setas -->
      <div class="w-3/4">
        <swiper
          :slidesPerView="1"
          :spaceBetween="20"
          :autoplay="{ delay: 3000 }"
          class="shadow-lg rounded-lg overflow-hidden flex justify-center items-center"
        >
          <swiper-slide v-for="produto in produtos" :key="produto.id" class="relative p-8 bg-gelo text-preto rounded-lg shadow-lg flex flex-col items-center border-4 border-verdeNeon">
            <NuxtLink :to="'/produto/' + produto.id" class="text-center">
              <div class="text-6xl mb-4">{{ produto.emoji }}</div>
              <div class="text-xl font-bold">{{ produto.nome }}</div>
              <p class="text-gray-400">R$ {{ produto.preco }}</p>
            </NuxtLink>
          </swiper-slide>
        </swiper>
      </div>
      
    </div>

  </nav>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

const produtos = [
  { id: 1, nome: "Camiseta Premium", preco: 150, emoji: "👕" },
  { id: 2, nome: "Tênis Exclusivo", preco: 500, emoji: "👟" },
  { id: 3, nome: "Relógio de Luxo", preco: 1200, emoji: "⌚" },
  { id: 4, nome: "Mochila Tech", preco: 350, emoji: "🎒" },
  { id: 5, nome: "Óculos Moderno", preco: 280, emoji: "🕶️" },
  { id: 6, nome: "Fone de Ouvido Pro", preco: 650, emoji: "🎧" }
];
</script>