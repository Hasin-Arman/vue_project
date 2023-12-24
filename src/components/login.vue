<template>
  <div>
    <h1>Login Form</h1>
    <hr />
    <div class="loginForm">
      <input type="email" v-model="formValue.email" placeholder="Enter Email" />
      <input
        type="password"
        v-model="formValue.password"
        placeholder="Enter Password"
      />
      <button @click="LoginMethod">Submit</button>
      <p>Create Account <router-link to="/signup">Sign Up</router-link></p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LogIn",
  data() {
    return {
      formValue: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    LoginMethod() {
      axios
        .get(
          `http://localhost:3000/users?email=${this.formValue.email}&password=${this.formValue.password}`
        )
        .then((response) => {
          if (response.data.length != 0) {
            localStorage.setItem("user_info", JSON.stringify(response.data[0]));
            this.$router.push({ name: "Home" });
          }
        })
        .catch((error) => console.log(error));
    },
  },
  mounted() {
    const user = localStorage.getItem("user_info");
    if (user) {
      this.$router.push({ name: "Home" });
    }
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
.loginForm input {
  width: 300px;
  height: 20px;
  display: block;
  padding: 10px;
  border: 2px solid grey;
  margin: auto;
  margin-bottom: 15px;
}
.loginForm button {
  position: relative;
  left: 630px;
  padding: 10px;
  font: 1em sans-serif;
  margin-top: 10px;
  font-weight: bold;
}
p {
  text-align: center;
  font-weight: bold;
}
</style>
