<template>
  <div class="row m-5">
    <div class="col-6">
      <button class="btn-lg btn-outline-success" @click="$router.push('/category-create')">создать категорию</button>
    </div>
    <div class="col-6">
      <button class="btn-lg btn-outline-danger" @click="$router.push('/category-delete')">удалить категорию</button>
    </div>
  </div>
  <div class="row justify-content-center">
    <CategoryCard v-for="c in categories" :key="c.id" :title="c.title" :id="c.id"/>
  </div>
</template>

<script>
import CategoryCard from "../components/Category-card";

export default {
  name: "Category",
  components: {CategoryCard},
  data() {
    return {
      message:"",
      categories: [
        {id: 1, title: "category 1"},
        {id: 2, title: "category 2"},
        {id: 3, title: "category 3"},
        {id: 4, title: "category 4"},
        {id: 5, title: "category 5"},
        {id: 6, title: "category 6"},
        {id: 7, title: "category 7"},
        {id: 8, title: "category 8"},
        {id: 9, title: "category 9"},
        {id: 10, title: "category 10"},
        {id: 11, title: "category 11"},
        {id: 12, title: "category 12"},
      ],
      page: 0,
      limit: 12,
    }
  }
}
</script>

<style scoped>

.btn-lg{
  min-width: 100%;
}

</style>