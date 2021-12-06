<template>

    <router-link to="/category/:id" class="category-card d-flex align-items-center m-3">
      <span class="m-auto">{{ title }}</span>
    </router-link>

</template>

<script>
export default {
  name: "Category-card",
  props: ["title"],
  data() {
    return {

    }
  },
  methods:{

  },
  mounted() {

  }
}
</script>

<style scoped>

.category-card {
  width: 300px;
  height: 200px;
  padding: 20px;
  border: 1px solid teal;
  border-radius: 10px;
  box-shadow: 0 0 10px teal;
  font-weight: 400;
  font-size: 1.4em;
  overflow: hidden;
  text-decoration: none;
  transition: all 250ms linear;
}

.category-card:hover {
  box-shadow: 0 0 20px teal;
  font-weight: 500;
  font-size: 1.6em;
}

</style>