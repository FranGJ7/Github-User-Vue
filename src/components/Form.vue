<script setup>
import { ref } from 'vue'; 
import { useSearchHistoryStore } from '../store/useSearchHistoryStore';

   const emit = defineEmits(['formSubmit'])
   const searchInput = ref('')
   const searchHistory = useSearchHistoryStore()

 function handleSubmit(ev){
       ev.preventDefault()
       searchHistory.pushtoHistory(searchInput.value)
       emit('formSubmit', searchInput.value)
   }
   function showSearchHistory(){
       alert(`Histórico de pesquisa:\n${searchHistory.users.join("\n")}`)
   }

</script>

<template>
    <div class="containerForm">
    <form class="submit-line" @submit="handleSubmit">
        <input type="text" 
        v-model="searchInput" placeholder="Buscar usuário...">
        <button class="submit-lente">
            <img class="iconInput" src="../../public/lupa.png" alt="icone lupa de busca">
        </button>
    </form>
    <button class="btnHistory" type="button" @click="showSearchHistory">Histórico de busca</button>
 </div>
</template>


<style>
.containerForm{
    
}
.imgGh {
    width: 45px;
    height: 45px;
    margin-left: 20px;
    margin-top: 8px;
}

.iconInput {
    width: 19px;
}

.submit-lente {
    position: absolute;
    top: 1.2rem;
    right: 0.6rem;
    z-index: 10;
    border: none;
    background: transparent;
    outline: none;
    cursor: pointer;
}

.submit-line {
    padding-top: 15px;
    position: relative;
    width: 270px;
}

.submit-line input {
    font-family: 'Hepta Slab', serif;
    padding-left: 14px;
    font-size: 15px;
    color: #9746D6;
    width: 100%;
    height: 25px;
    border-radius: 100px;
    border: none;
}

textarea:focus,
input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
}

::-webkit-input-placeholder {
    color: #9746D6;
    font-size: 15px;
}
.btnHistory{
    margin-top:20px;
    border-radius: 10px;
    width: 150px;
    height: 30px;
}

</style>