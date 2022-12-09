<script setup>
import NavbarVue from './components/Navbar.vue';
import FooterVue from './components/Footer.vue';

</script>
<template>
   <div class="mainContainer">
  <nav>
    <NavbarVue/>
  </nav>
  <RouterView/>
  <footer>
  <FooterVue/>
 </footer>
</div>
</template>

<style>
 @import url('https://fonts.googleapis.com/css2?family=Hepta+Slab:wght@300&display=swap');
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body,html{
    background-color: black;
    color: white;
}
.mainContainer{
  height: 100vh;
}
</style>