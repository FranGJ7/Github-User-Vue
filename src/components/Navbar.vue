


<template>
    <div class="navBar">

        <RouterLink to="/"><img class="imgGh" src="../../public/github.png" alt="Logo GitHub"></RouterLink>
        <div class="links">
            <RouterLink class="link" to="/">Principal</RouterLink>
            <RouterLink class="link" to="/search">Buscar</RouterLink>
        </div>
    </div>
</template>


<style>
.navBar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

}
.links {
    padding: 20px;
}

.link {
    font-size: 18px;
    padding-left: 20px;
    color: #D9D9D9;
    text-decoration: none;
}

.link:hover {
    color: white;
}
</style>