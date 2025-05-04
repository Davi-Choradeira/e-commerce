<template>
  <div>
    produto
    <div>
      {{ produto.nome }}
    </div>
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