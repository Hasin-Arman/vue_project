<template>
  <div>
    <HeaderPage/>
    <h1>Welcome To The Home Page</h1>
  </div>
</template>

<script>
import HeaderPage from './Header.vue'
export default {
  name: "HomePage",
  components:{
    HeaderPage
  },
  mounted() {
    const user = localStorage.getItem("user_info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>

<style scoped></style>
