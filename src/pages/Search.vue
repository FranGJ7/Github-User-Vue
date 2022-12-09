<script setup>

import { ref } from 'vue';
import Profile from '../components/Profile.vue';
const isOpen = ref(true)
</script>

<template>
  <div class="container">
    <input type="checkbox" v-model="isOpen"> {{ isOpen }}
  <Profile v-if="isOpen">
    <h1> GitHub User Data</h1>
  </Profile>
</div> 

</template>
<style>
  .container{
    margin-left: 10%;
    margin-right: 10%;
  }
</style>