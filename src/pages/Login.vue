<template>

  <div class="form-bloc m-auto">
    <div>
      <h2>Вход</h2>
    </div>
    <div class="mb-3 row">
      <label class="col-sm-2 col-form-label">Логин</label>
      <div class="col-sm-10">
        <input for="staticEmail" type="text" class="form-control" placeholder="login"
               v-model="username">
      </div>
    </div>
    <div class="mb-3 row">
      <label for="inputPassword" class="col-sm-2 col-form-label">Пароль</label>
      <div class="col-sm-10">
        <input type="password" class="form-control" placeholder="password" v-model="password">
      </div>
    </div>
    <div class="mb-3 row">
      <div class="col-6">
        <router-link to="/register" class="nav-link">Регистрация</router-link>
      </div>
      <div class="col-6 d-flex flex-row-reverse">
        <button type="button" class="btn btn-success btn-lg" @click="login">Войти</button>
      </div>
    </div>
  </div>

</template>

<script>

import axios from 'axios'

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: ""
    }
  },
  methods: {
    login() {

      const data = {
        "username": this.username,
        "password": this.password
      }

      const url = "http://localhost:8080/api/auth/login"

      axios.post(url, data).then(res => {

        if (res.data.id > 0) {

          const payload = {
            token: res.data.token,
            userId: res.data.id,
            username: res.data.username
          }

          this.$store.commit('setAuth', payload)

          this.$notify({
            type: "success",
            title: "Авторизация",
            text: "Успешно!",
          });

          setTimeout(this.goToCategories, 3000)
        }
      }).catch(err => {

        if(err.response){
          this.$notify({
            type: "error",
            title: "Авторизация",
            text: "Неверный логин или пароль"
          });
        }
      })
    },

    goToCategories() {
      this.$router.push({path: '/category'})
    }

  }
}
</script>

<style scoped>



.form-bloc {
  max-width: 50%;
  padding-top: 100px;
  color: teal;
}

.nav-link {
  color: teal;
  font-size: 1.2em;
  font-weight: 400;
}

</style>