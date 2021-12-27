<template>
  <div class="container">
    <notifications position="bottom right" width="400px" classes="notif"/>

    <router-view></router-view>
  </div>
</template>

<script>


import store from "core-js";

export default {
  name: 'App',
  store
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap');

* {
  font-family: 'Outfit', sans-serif;
  //color: teal;
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

.notif{
  // styling
  margin: 0 5px 5px;
  padding: 10px;
  font-size: 1.2em;
  font-weight: bold;
  color: black;

  // default (blue)
  background: #44a4fc;
  border-left: 5px solid #187fe7;

  // types (green, amber, red)
  &.success {
    background: #68cd86;
    border-left-color: #42a85f;
  }

  &.warn {
    background: #ffb648;
    border-left-color: #f48a06;
  }

  &.error {
    background: #e54d42;
    border-left-color: #b82e24;
  }
}

</style>
