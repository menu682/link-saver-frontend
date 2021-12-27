<template>
  <nav class="navbar navbar-expand-lg navbar-style">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Link Saver</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
              aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"><b>&#9776;</b></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link v-if="isAuth === true" class="nav-link" aria-current="page" to="/category">Главная</router-link>
            <router-link v-else class="nav-link" aria-current="page" to="/">Главная</router-link>
          </li>
        </ul>
      </div>
    </div>

    <div class="collapse navbar-collapse">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a v-if="isAuth === true" class="nav-link auth-links" aria-current="page"
             href="" @click="logout">Выйти</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data(){
    return {

    }
  },
  computed:{
      isAuth(){
        if(localStorage.isAuth === "true"){
          return true
        }
          return false
      }
  },
  methods:{
    logout(){
      localStorage.clear()
      this.$router.push({path: '/login'})
    }
  }
}
</script>

<style scoped>

* {
  font-family: 'Outfit', sans-serif;
  color: teal;
}

.navbar-style {
  background: white;
  box-shadow: 0px 5px 10px teal;
  font-size: 1.2em;
  font-weight: 600;
}

.nav-link, .navbar-brand, .navbar-toggler {
  color: teal;
}

.auth-links {
  font-size: .9em;
}





</style>