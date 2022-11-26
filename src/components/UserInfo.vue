<script setup>
defineProps(["login", "name", "company", "avatar_url",  "avatar_url", "bio"])
</script>

<template>
    <img :src="avatar_url">
    <strong>{{ login }} </strong>
    <h1>{{ name }}</h1>
    <h2>{{ company }}</h2>
    <span>{{ bio }}</span>
</template>