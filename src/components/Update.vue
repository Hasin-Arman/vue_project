<template>
  <div>
    <HeaderPage />
    <form style="marginTop: 15px" class="updateForm">
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
      <button type="button" @click="updateMethod">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios"
import HeaderPage from "./Header.vue";
export default {
  name: "updatePage",
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
  methods:{
    updateMethod(){
      axios
        .put("http://localhost:3000/restaurants/"+this.$route.params.id, {
          name: this.formValue.name,
          address: this.formValue.address,
          contact: this.formValue.contact,
        })
        .then((response) => {
          if (response.status == 200) {
            this.$router.push({ name: "Home" });
          }
        });
    }
  },
  mounted() {
    const user = localStorage.getItem("user_info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
    axios.get('http://localhost:3000/restaurants/'+this.$route.params.id)
    .then(res =>{
      this.formValue=res.data
    })
  },
};
</script>

<style scoped>
.updateForm input {
  width: 300px;
  height: 20px;
  display: block;
  padding: 10px;
  border: 2px solid rgb(33, 108, 151);
  margin: auto;
  margin-bottom: 15px;
}
.updateForm button {
  position: relative;
  border: 2px solid rgb(33, 108, 151);
  left: 630px;
  padding: 10px;
  font: 1em sans-serif;
  margin-top: 10px;
  font-weight: bold;
}
</style>
