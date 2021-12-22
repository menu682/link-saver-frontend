<template>
  <div class="row m-5">
    <div class="col-12">
      <button class="btn-lg btn-outline-success" @click="createCategory">создать категорию</button>
    </div>
  </div>
  <div class="row justify-content-center">
    <CategoryCard v-for="c in categories" :key="c.id" :cart=c />
  </div>
</template>

<script>
import CategoryCard from "../components/Category-card";
import axios from "axios";

export default {
  name: "Category",
  components: {CategoryCard},
  data() {
    return {
      message: "",
      categories: [],
    }
  },
  created() {
    this.getAllCategories()
  },
  methods: {

    createCategory() {

      this.$swal(
          {
            title: 'Введите название категории',
            input: 'text',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonColor: 'teal',
            cancelButtonColor : 'red',
            confirmButtonText: 'Сохранить',
            cancelButtonText: 'Отмена',
            showLoaderOnConfirm: true,
            preConfirm: (text) => {

              const url = "http://localhost:8080/api/category/"
              const token = localStorage.token
              const data = {"categoryName": text}

              axios.post(url, data, {
                headers: {
                  "Authorization": token
                }
              }).then(res => {

                this.$notify({
                  type: "success",
                  title: "Категории",
                  text: res.data.message,
                });
                this.getAllCategories()

              }).catch(err => {

                if (err.response) {
                  this.$notify({
                    type: "error",
                    title: "Ошибка",
                    text: err.response.data.message
                  });
                }
              })
            }
          }
      )

      },


    getAllCategories() {

      const url = "http://localhost:8080/api/category"

      const token = localStorage.token

      axios.get(url,
          {
            headers: {
              "Authorization": token
            }
          }).then(res => {

        this.categories = res.data.categories

        this.$notify({
          type: "success",
          title: "Категории",
          text: "Все категории загружены",
        });

      }).catch(err => {

        if (err.response) {
          this.$notify({
            type: "error",
            title: "Ошибка",
            text: err.response.data.message
          });
        }
      })

    }

  }
}
</script>

<style scoped>

.btn-lg {
  min-width: 100%;
}

</style>