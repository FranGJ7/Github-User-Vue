<!--Composition trabalha com setup dentro da tag script-->
<script setup>
import { reactive, ref, computed, onMounted, onUpdated, onUnmounted } from 'vue';
import Repository from './Repository.vue';
import UserInfo from './UserInfo.vue'
import Form from './Form.vue';

const searchInput = ref("")

const state = reactive({
    name: "",
    login: "",
    bio: "",
    company: "",
    avatar_url: "",
    repos: []
})

async function fetchGithubUser(searchInput) {
    const res = await fetch(`https://api.github.com/users/${searchInput}`)
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
    return state.repos.length > 0 ? `Repositórios públicos:${state.repos.length}` : `Repositórios públicos: 0`
})



onMounted(() => {
    console.log("O componente foi montado")
})

onUpdated(() => {
    console.log("O component foi atualizado")
})


onUnmounted(() => {
    console.log("O componente foi desmontado")
})

</script>

<template>
    
    <Form @form-submit="fetchGithubUser" />
    <div v-if="state.login !== ''">
        <UserInfo :name="state.name" :company="state.company" :avatar_url="state.avatar_url"
            :bio="state.bio" /> 
    </div>
   
    <div v-if="(state.login == '')">
       
       <p>Usuário não encontrado.</p>
    </div>
    
    <section v-if="state.repos.length > 0">
        <p class="repos">{{ reposCountMessage }}</p>
        <article v-for="repo of state.repos">
            <Repository :full_name="repo.full_name" :description="repo.description" :html_url="repo.html_url" :reposCountMessage="reposCountMessage" />
        </article>
    </section>
    <slot name="footer"></slot>
</template>

<style>
  .repos{
    font-family: 'Hepta Slab', serif;
    font-size: 12px;
    text-align: center;
  }
</style>