<template>
  <div>
    <HeaderPage />
    <h1 style="text-align:center">Hello {{ first_name }} {{ last_name }}, Welcome To The Home Page</h1>
    <table class="AddTable">
      <th>ID</th>
      <th>Name</th>
      <th>Contact</th>
      <th>Address</th>
      <th>Actions</th>
      <tr v-for="res in restaurants" :key="res.id">
        <td>{{ res.id }}</td>
        <td>{{ res.name }}</td>
        <td>{{ res.contact }}</td>
        <td>{{ res.address }}</td>
        <td><button><router-link  style="text-decoration:none;color:black;" :to="'/update/' + res.id">update</router-link> </button> <button @click="deleteMethod(res.id)">Delete</button></td>
        
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import HeaderPage from "./Header.vue";
export default {
  name: "HomePage",
  data() {
    return {
      first_name: "",
      last_name: "",
      restaurants: [],
    };
  },
  components: {
    HeaderPage,
  },
  methods: {
    loadData() {
      axios
        .get("http://localhost:3000/restaurants")
        .then((response) => {
          this.restaurants = response.data;
        })
        .catch((error) => console.log(error));
    },
    deleteMethod(id) {
      axios.delete("http://localhost:3000/restaurants/" + id).then((res) => {
        if (res.status == 200) {
          this.loadData()
        }
      });
    },
  },
  mounted() {
    const user = localStorage.getItem("user_info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
    else{
      this.first_name = JSON.parse(user).first_name;
      this.last_name = JSON.parse(user).last_name;
      this.loadData();
    }
  },
};
</script>

<style scoped>
table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
  padding: 10px;
  border-color: #96d4d4;
}
table{
  margin: auto;
}
</style>
