<script>
export default{
      data(){
         return{
            name: "",
            login:"",
            bio:"...",
            company:"",
            avatar_url:"/github.png",
            searchInput:""
         }
    },
    methods:{
    async   fetchGithubUser(){
            const res = await fetch(`https://api.github.com/users/${this.searchInput}`)
            
            const { login, name, bio, company, avatar_url } = await res.json() 
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
        <input type="text" v-model="searchInput">
        <button v-on:click="fetchGithubUser">Carregar Usuário</button>
            <img  v-bind:src="avatar_url">
        <strong>{{login}} </strong>
        <h1>{{name}}</h1>
        <h2>{{company}}</h2>
        <span>{{bio}}</span>
</template>
