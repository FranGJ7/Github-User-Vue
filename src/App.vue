<script setup>
    //import OptionsApi from './components/OptionsApi.vue';
import CompositionApiVue from './components/CompositionApi.vue';

/* export default {
     components:{
      OptionsApi,              options forma diferente de composition substituido por setup dentro da tag script 
      CompositionApiVue
     }
} */
</script>

<template>
  <CompositionApiVue/>
  <!-- <OptionsApi/> -->
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