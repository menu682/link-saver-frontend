<template>

  <div class="category-card d-flex align-items-center m-3">


    <div class="row m-auto">
      <div class="row m-auto">
        <div class="col-12 m-auto">
          <router-link :to="/category/ + cart.id" class="category-link m-auto">
            <span class="m-auto">{{ cart.categoryName }}</span>
          </router-link>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-6 m-auto">
          <button class="btn-sm btn-success btn-size" @click="rename(cart.id)" >Изменить</button>
        </div>
        <div class="col-6 m-auto">
          <button class="btn-sm btn-danger btn-size" @click="del(cart.id)">Удалить</button>
        </div>
      </div>
    </div>
  </div>


</template>

<script>

import axios from "axios";

export default {
  name: "Category-card",
  props: [ "cart" ],
  data() {
    return {

    }
  },
  methods:{

    del(id){

      this.$swal(
          {
            title: 'Удаление!',
            text: "Вы уверенны, что хотите удалить категорию со всеми ссылками?",
            icon: 'warning',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonColor: 'teal',
            cancelButtonColor : 'red',
            confirmButtonText: 'Сохранить',
            cancelButtonText: 'Отмена',
            showLoaderOnConfirm: true,
          }).then((result) => {
        if (result.isConfirmed) {

          const url = "http://localhost:8080/api/category/"
          const token = localStorage.token

          axios.delete(url, {
            headers: {
              "Authorization": token
            },
            data: {
              "categoryId": id
            }
          },).then(res => {
            this.$swal(
                'Удалено!',
                res.data.message,
                'success'
            ).then(() => {
                  window.location.reload()
            }
            )


          }).catch(err => {
            this.$swal({
                  position: 'top-end',
                  icon: 'error',
                  title: err.response.data.message,
                  showConfirmButton: false,
                  timer: 1500
            })
          })


        }
      })
    },

    rename(id){
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
              const data = {
                "categoryId": id,
                "newCategoryName": text
              }

              axios.put(url, data, {
                headers: {
                  "Authorization": token
                }
              }).then(res => {

                this.$notify({
                  type: "success",
                  title: "Категории",
                  text: res.data.message,
                });

                setTimeout(window.location.reload(), 3000)

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




  },
  mounted() {

  }
}
</script>

<style scoped>

.btn-size{
  width: 110px;
  height: 35px;
}

.category-card {
  width: 300px;
  height: 200px;
  padding: 20px;
  border: 1px solid teal;
  border-radius: 10px;
  box-shadow: 0 0 10px teal;
  color: teal;
  font-weight: 400;
  font-size: 1.2em;
  overflow: hidden;
  text-decoration: none;
  transition: all 250ms linear;
}

.category-card:hover {
  box-shadow: 0 0 20px teal;
  font-weight: 500;
  font-size: 1.4em;
}

.category-link{
  color: teal;
  font-weight: 400;
  font-size: 1.2em;
  overflow: hidden;
  text-decoration: none;
}

</style>