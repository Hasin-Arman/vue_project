<template>
  <div>
    <HeaderPage/>
    <h1>Hello {{first_name}} {{last_name}}, Welcome To The Home Page</h1>
    <table class="AddTable">
      <th>ID</th>
      <th>Name</th>
      <th>Contact</th>
      <th>Address</th>
      <th>Actions</th>
      <tr v-for="res in restaurants" :key=res.id>
        <td>{{res.id}}</td>
        <td>{{res.name}}</td>
        <td>{{res.contact}}</td>
        <td>{{res.address}}</td>
        <td><router-link :to="'/update/' + res.id">update</router-link></td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
import HeaderPage from './Header.vue'
export default {
  name: "HomePage",
  data(){
    return {
      first_name:'',
      last_name:'',
      restaurants:[]
    }
  },
  components:{
    HeaderPage
  },
  mounted() {
    const user = localStorage.getItem("user_info");
    this.first_name=JSON.parse(user).first_name
    this.last_name=JSON.parse(user).last_name
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
    axios.get('http://localhost:3000/restaurants')
    .then(response =>{
      this.restaurants=response.data
    })
    .catch(error => console.log(error))
  },
};
</script>

<style scoped>
table,th,td{
  border: 1px solid black;
  border-collapse: collapse;
  padding: 10px;
  border-color: #96D4D4;
}
</style>
