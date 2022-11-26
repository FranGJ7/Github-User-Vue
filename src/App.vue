<script setup>
</script>

<template>
  <h1>Olá Mundo!</h1>
  <nav>
    <RouterLink to="/">Principal</RouterLink>
    <RouterLink to="/search">Buscar</RouterLink>
  </nav>
  <RouterView>

  </RouterView>
</template>

<style>
#app {
  display: grid;
  place-content: center;
  min-height: 100vh;
}
button{
  font-size: 2rem;
}
</style>