<template>
  <div>
    <h1>Sign Up Form</h1>
    <hr />
    <div class="signForm">
      <input
        type="text"
        v-model="formValue.first_name"
        placeholder="Enter First Name"
      />
      <input
        type="text"
        v-model="formValue.last_name"
        placeholder="Enter Last Name"
      />
      <input type="email" v-model="formValue.email" placeholder="Enter Email" />
      <input
        type="password"
        v-model="formValue.password"
        placeholder="Enter Password"
      />
      <button @click="SignMethod">Submit</button>
      <p>Already signed in? <router-link to="/login">Login</router-link></p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "signUp",
  data() {
    return {
      formValue: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    SignMethod() {
      axios
        .post("http://localhost:3000/users", {
          first_name: this.formValue.first_name,
          last_name: this.formValue.last_name,
          email: this.formValue.email,
          password: this.formValue.password,
        })
        .then((response) => {
          if (response.status == 201) {
            localStorage.setItem("user_info", JSON.stringify(response.data));
            this.$router.push({ name: "Home" });
          }
        })
        .catch((error) => console.log(error));
    },
  },
  mounted(){ 
    const user = localStorage.getItem('user_info')
    if(user){
        this.$router.push({ name: "Home" });
    }
  }
  
};
</script>

<style scoped>
h1 {
  text-align: center;
}
.signForm input {
  width: 300px;
  height: 20px;
  display: block;
  padding: 10px;
  border: 2px solid grey;
  margin: auto;
  margin-bottom: 15px;
}
.signForm button {
  position: relative;
  left: 620px;
  padding: 10px;
  font: 1em sans-serif;
  margin-top: 10px;
  font-weight: bold;
}
p{
    text-align: center;
    font-weight: bold;
}
</style>
