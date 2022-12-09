<script setup>
defineProps(["login", "name", "company", "avatar_url", "avatar_url", "bio"])
</script>

<template>
    <div class="containerProfile">
        <div class="infoProfile">
    <img class="imgProfile" :src="avatar_url">
    <strong>{{ login }} </strong>
    <h1 class="nameProfile">{{ name }}</h1>
    <h2>{{ company }}</h2>
    <span>{{ bio }}</span>
        </div>
    </div>
</template>


<style>
.containerProfile{
    display: flex;
    justify-content: center;
}
.imgProfile {
    width: 200px;
    background:linear-gradient(to right, darkblue, darkorchid) border-box;
    margin-bottom: 40px;
    border-radius: 50em;
    border: 4px solid transparent;
}
.nameProfile{
    font-family: 'Hepta Slab', serif;
    margin-bottom: 20px;
}
.infoProfile{
    width: 750px;
    margin-bottom:30px ;
}
</style>