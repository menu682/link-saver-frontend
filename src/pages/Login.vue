<template>

    <div class="form-bloc m-auto">
      <div>
        <h2>Вход</h2>
      </div>
      <div class="mb-3 row">
        <label class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
          <input for="staticEmail" type="text" class="form-control" placeholder="example@email.ua"
                 v-model="email">
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

export default {
  name: "Login",
  data(){
    return {
      email: "",
      password: ""
    }
  },
  methods:{
    login(){
      //отправить на сервер логин пароль
      //получить данные от сервера
      //записать в стор токен
    }
  }
}
</script>

<style scoped>

.form-bloc{
  max-width: 50%;
  padding-top: 100px;
}

.nav-link{
  color: teal;
  font-size: 1.2em;
  font-weight: 400;
}

</style>