<template>
    <nav class="bg-cinzaClaro p-4 text-preto flex justify-between items-center shadow-md">
      <ul class="flex space-x-6 text-lg">
        <li class="hover-effect"><a href="/">Início</a></li>
        <li class="hover-effect"><a href="/produtos">Produtos</a></li>
      </ul>
      <div class="cart-icon">
        🛒 <!-- Apenas ícone sem texto -->
      </div>
    </nav>
  </template>
  
  <style>
  .cart-icon {
    font-size: 24px;
    cursor: pointer;
  }
  .cart-icon:hover {
    transform: scale(1.2);
  }
  </style>