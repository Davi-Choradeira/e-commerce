<template>
    <div>
        Os Produtos 
    </div>
    <div>
    <div v-if="data">
        <div v-for="produto in data">
        produto : {{ produto.title }} <br>
        preço : {{ produto.price }} <br>
        <a :href="`http://localhost:3000/produto/${ produto.id ? produto.id : '1' }`">LINK</a>
        </div>
        O dado do API
        <div class="p-4 bg-amber-500" @click="fetchData">Clique aqui</div>
        {{ JSON.stringify(data) }}
        </div>
        <div v-else>Loading</div>
    </div>


</template>

<script setup>
 const produtos = [
  { id: 1, nome: "Camiseta", preco: 25 },
  { id: 2, nome: "Tênis", preco: 100 },
  { id: 3, nome: "Relógio", preco: 200 }
];


const data = ref(null);
async function fetchData () {
const fetchedData = await fetch("https://dummyjson.com/products");
const response = await fetchedData.json()
// data = response.products
data.value = response.products
console.log(response)
    
}

//     
</script>