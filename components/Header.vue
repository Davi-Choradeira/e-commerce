<template>
  <header class="bg-gelo py-4 text-center shadow-lg border-b-2 border-cinzaClaro flex justify-center items-center p-6">
    <div class="logo-container">
      <div class="logo-circle">Dev</div>
    </div>
  </header>
</template>

<style>
.logo-container {
  width: 80px;
  height: 80px;
}
.logo-circle {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: gray;
  color: white;
  font-weight: bold;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease-in-out;
}
.logo-circle:hover {
  transform: rotate(20deg);
}
</style>