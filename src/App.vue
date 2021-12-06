<template>
  <div class="container">
    <Navbar/>
    <router-view></router-view>
  </div>
</template>

<script>


import store from "core-js";
import Navbar from "./components/Navbar";

export default {
  name: 'App',
  components:{Navbar},
  store
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap');

* {
  font-family: 'Outfit', sans-serif;
  color: teal;
}

.form-control:focus {
  color: teal;
  border-color: teal;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px teal;
}

.row {
  margin-top: 20px;
}

.right-line {
  border-right: 1px solid teal;

}

.btn-outline-success:hover {
  background-color: teal;
}

</style>
