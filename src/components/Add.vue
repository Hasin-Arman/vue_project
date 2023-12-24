<template>
  <div>
    <HeaderPage />
    <form style="marginTop: 15px" class="addForm">
      <input type="text" v-model="formValue.name" placeholder="Enter Name" />
      <input
        type="text"
        v-model="formValue.address"
        placeholder="Enter Address"
      />
      <input
        type="text"
        v-model="formValue.contact"
        placeholder="Enter Contact"
      />
      <button type="button" @click="AddMethod">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import HeaderPage from "./Header.vue";
export default {
  name: "AddPage",
  components: {
    HeaderPage,
  },
  data() {
    return {
      formValue: {
        name: "",
        address: "",
        contact: "",
      },
    };
  },
  methods: {
    AddMethod() {
      axios
        .post("http://localhost:3000/restaurants", {
          name: this.formValue.name,
          address: this.formValue.address,
          contact: this.formValue.contact,
        })
        .then((response) => {
          if (response.status == 201) {
            this.$router.push({ name: "Home" });
          }
        });
    },
  },
  mounted() {
    const user = localStorage.getItem("user_info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>

<style scoped>
.addForm input {
  width: 300px;
  height: 20px;
  display: block;
  padding: 10px;
  border: 2px solid rgb(33, 108, 151);
  margin: auto;
  margin-bottom: 15px;
}
.addForm button {
  position: relative;
  border: 2px solid rgb(33, 108, 151);
  left: 630px;
  padding: 10px;
  font: 1em sans-serif;
  margin-top: 10px;
  font-weight: bold;
}
</style>
