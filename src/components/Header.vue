<template>
    <div class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/add">Add Restaurant</router-link>
      <a @click="logout" href="">Logout</a>
    </div>
</template>

<script>
    export default {
        name:"HeaderPage",
        methods:{
            logout(){
                localStorage.clear();
                this.$router.push({"name":"Login"})
            }
        }

    }
</script>

<style scoped>
.nav{
    background-color: rgb(51, 53, 51);
    padding: 10px;
    /* display: flex;
    justify-content: right; */
}
.nav a{
    font-size: 20px;
    font-weight: bold;
    color: white;
    margin-left: 25px;
    text-decoration: none;
    overflow: hidden;
}
.nav a:hover{
    background-color: rgb(198, 235, 203);
    padding: 5px;
}
</style>