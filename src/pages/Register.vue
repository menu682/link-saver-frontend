<template>
<Navbar/>
    <div class="form-bloc m-auto">
      <div>
        <h2>Регистрация</h2>
      </div>
      <div class="mb-3 row">
        <label class="col-sm-2 col-form-label">Логин</label>
        <div class="col-sm-10">
          <input for="staticEmail" type="text" class="form-control" placeholder="login"
                 v-model="login">
        </div>
      </div>
      <div class="mb-3 row">
        <label class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
          <input for="staticEmail" type="text" class="form-control" placeholder="example@email.ua"
                 v-model="email">
        </div>
      </div>
      <div class="mb-3 row">
        <label class="col-sm-2 col-form-label">Пароль</label>
        <div class="col-sm-10">
          <input type="password" class="form-control" placeholder="password" v-model="password">
        </div>
      </div>
      <div class="mb-3 row">
        <div class="col-6">
          <router-link to="/login" class="nav-link">Войти</router-link>
        </div>
        <div class="col-6 d-flex flex-row-reverse">
          <button type="button" class="btn btn-success btn-lg" @click="register">Регистрация</button>
        </div>
      </div>
    </div>

</template>

<script>

import axios from 'axios'
import Navbar from "../components/Navbar";

export default {
  name: "Register",
  components: {Navbar},
  data(){
    return {
      login:"",
      email: "",
      password: ""
    }
  },
  methods:{
    register(){
      const data = {
        "username": this.login,
        "email": this.email,
        "password": this.password
      }

      const url = "http://localhost:8080/api/auth/register"

      axios.post(url, data).then(res => {

          this.$notify({
            type: "success",
            title: "Регистрация",
            text: res.data.message,
          });

        setTimeout(this.goToLogin, 3000)

      }).catch(err => {

        if(err.response){
          this.$notify({
            type: "error",
            title: "Регистрация",
            text: err.response.data.message
          });
        }
      })

    },

    goToLogin(){
      this.$router.push({path: '/login'})
    }
  }
}
</script>

<style scoped>


.form-bloc{
  max-width: 50%;
  padding-top: 100px;
  color: teal;
}

.nav-link{
  color: teal;
  font-size: 1.2em;
  font-weight: 400;
}

</style>