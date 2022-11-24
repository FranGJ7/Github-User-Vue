<script>
export default{
      data(){
         return{
            name: "Fran",
            login:"johndue",
            bio:"...",
            company:"Acme Inc.",
            avatar_url:"/github.png",
            searchInput:""
         }
    },
    methods:{
    async   fetchGithubUser(){
            const res = await fetch(`https://api.github.com/users/${this.searchInput}`)
            const { login, name, bio, company, avatar_url } = await res.json() 
            console.log(res)
            this.login = login 
            this.name = name
            this.bio = bio
            this.company = company
            this.avatar_url = avatar_url
        }
    }
}
</script>


<template>
        <h2>GitHub User Data</h2>
        <input type="text" v-model="searchInput">
        <button v-on:click="fetchGithubUser">Carregar Usuário</button>
        <img v-bind:src="avatar_url">
        <strong>{{login}} </strong>
        <h1>{{name}}</h1>
        <h2>{{company}}</h2>
        <span>{{bio}}</span>
</template>


<style>
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body{
    background-color: black;
    color: white;
}
img{
    width: 250px;
    border-radius: 100%;
}
</style>