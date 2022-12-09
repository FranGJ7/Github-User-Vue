<script setup>

import { useSearchHistoryStore } from '../store/useSearchHistoryStore';
const searchHistory = useSearchHistoryStore()

</script>

<template>
      <div class="containerHome">
      <h1 class="welcome">Bem-Vindo!</h1>
      <p>Aqui você encontra usuários e seus repositórios de maneira fácil.</p>

      <section>
            <h2>Histórico de Pesquisa</h2>
            <p v-for="user in searchHistory.users">{{user}}</p>
      </section>
    </div>
</template>


<style>
   .containerHome{
      background-image:url(../../public/githubWallpaper.jpg);
      background-repeat: no-repeat;
      background-size: cover;
      height: 100vh;
   }
   .welcome{
      font-family: 'Hepta Slab', serif;
   }
</style>