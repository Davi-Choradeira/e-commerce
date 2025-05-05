<template>
  <div class="min-h-screen flex flex-col bg-gelo text-preto">
    <Header />
    <Navbar />
    <main class="flex-1 container mx-auto p-6">
      <slot />
    </main>
    <Footer />
  </div>
</template>