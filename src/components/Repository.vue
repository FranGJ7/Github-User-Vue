<script setup>
       defineProps(["full_name", "description", "html_url", "reposCountMessage"])
</script>

<template>
    <div class="containerBox">
    <div class="box">
    <div class="inBox">
    <h3>{{ full_name }}</h3>
    <p>{{ description }}</p>
    </div>
    <a class="linkRepo" :href="html_url" target="_blank">Ver no GitHub</a>
   </div>
</div>
</template>

 

<style>
.containerBox{
    display: flex;
    justify-content: center;
}
  .box{
      background-image: linear-gradient(to right, rgba(255,0,0,0), rgb(218, 42, 42));
      background-color: #210856;
      margin-bottom: 30px;
      padding-top: 20px;
      padding-left:23px;
      width: 750px;
      height: 180px;
      border-radius: 12px;
  }
  .inBox{
     height: 125px;
  }
  h3{
    font-size:18px;
    font-family: 'Hepta Slab', serif; 
    color: #9746D6;
  }
  p{
    padding-top:20px;
  }
  .linkRepo{
    color: white;
    padding-left: 600px;
  }


</style>
