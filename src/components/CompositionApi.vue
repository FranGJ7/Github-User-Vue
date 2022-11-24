<script setup>
import { reactive, ref, computed } from 'vue';


const searchInput = ref("")

const state = reactive({
    name: "",
    login: "",
    bio: "",
    company: "",
    avatar_url: "",
    repos: []
})

async function fetchGithubUser(ev) {
    ev.preventDefault()
    const res = await fetch(`https://api.github.com/users/${searchInput.value}`)
    const { login, name, bio, company, avatar_url } = await res.json()

    state.login = login
    state.name = name
    state.bio = bio
    state.company = company
    state.avatar_url = avatar_url
    fetchUserRepositories(login)
}

async function fetchUserRepositories(username) {
    const res = await fetch(`https://api.github.com/users/${username}/repos`)
    const repos = await res.json()
    state.repos = repos
}

const reposCountMessage = computed(() => {
    return state.repos.length > 0 ? `${state.name} possui ${state.repos.length} repositórios públicos` : `${state.name} não possui repositório público `
})



</script>

<template>
    <h2>GitHub User Data</h2>


     <form @submit="fetchGithubUser">
        <input type="text" v-model="searchInput">
        <button>Carregar usuário</button>

     </form>




<!--<input type="text" v-model="searchInput">
    <button @click="fetchGithubUser">Carregar Usuário</button>-->
    <div v-if="state.login !== ''">
        <img :src="state.avatar_url">
        <strong>{{ state.login }} </strong>
        <h1>{{ state.name }}</h1>
        <h2>{{ state.company }}</h2>
        <span>{{ state.bio }}</span>
    </div>



    <section v-if="state.repos.length > 0">
        <h2>{{ reposCountMessage }}</h2>
        <article v-for="repo of state.repos">
            <h3>{{ repo.full_name }}</h3>
            <p>{{ repo.description }}</p>
            <a :href="repo.html_url" target="_blank">Ver no GitHub</a>
        </article>
    </section>
</template>