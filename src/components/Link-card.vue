<template>
  <div class="row link-box m-auto mt-2 p-1" :id="`${link.linkId}`" :style="`height: ${height}`">
    <div class="col-8" @click="goToLink">
      <h3>{{ link.linkName }}</h3>
      <span>{{ link.linkUrl }}</span>
    </div>
    <div class="col-2 m-auto">
      <button class="btn-sm btn-success btn-size" @click="showChange(link.linkId)">изменить</button>
    </div>
    <div class="col-2 m-auto">
      <button class="btn-sm btn-danger btn-size" @click="del(link.categoryId, link.linkId)">удалить</button>
    </div>

    <div class="row">
      <div class="row">
        <label class="col-sm-2 col-form-label">Название</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" v-model="linkName">
        </div>
      </div>

      <div class="row">
        <label class="col-sm-2 col-form-label">Ссылка</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" v-model="linkUrl">
        </div>
      </div>

      <div class="row m-auto">
        <div class="col-12 ">
          <button class="btn-lg btn-outline-success btn-save" @click="saveChange(link.linkId)">сохранить изменения</button>
        </div>
      </div>

    </div>


  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Link-card",
  props: ['link'],
  data() {
    return {

      linkName: this.link.linkName,
      linkUrl: this.link.linkUrl,
      height: "80px",
      catId: this.link.categoryId

    }
  },
  methods: {
    goToLink() {
      window.open(this.link.linkUrl)
    },

    showChange(id){
      let el = document.getElementById(id)
      el.style.height = "300px";
    },

    hideChange(id){
      let el = document.getElementById(id)
      el.style.height = "80px";
    },

    saveChange(id){

      const url = "http://localhost:8080/api/link/"
      const token = localStorage.token

      const data = {
        "oldLinkName": this.link.linkName,
        "oldUrl": this.link.linkUrl,
        "categoryId": this.catId,
        "linkId": id,
        "newLinkName": this.linkName,
        "newUrl": this.linkUrl
      }

      axios.put(url, data, {
        headers: {
          "Authorization": token
        }
      }).then(res => {

        this.$notify({
          type: "success",
          title: "Ссылки",
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
      this.hideChange(id)
    },

    del(categoryId, linkId){

      this.$swal(
          {
            title: 'Удаление!',
            text: "Вы уверенны, что хотите удалить ссылку?",
            icon: 'warning',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonColor: 'teal',
            cancelButtonColor : 'red',
            confirmButtonText: 'Удалить?',
            cancelButtonText: 'Отмена',
            showLoaderOnConfirm: true,
          }).then((result) => {
        if (result.isConfirmed) {

          const url = "http://localhost:8080/api/link/"
          const token = localStorage.token

          axios.delete(url, {
            headers: {
              "Authorization": token
            },
            data: {
              "categoryId": categoryId,
              "linkId": linkId
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
  }
}
</script>

<style scoped>

.btn-size {
  width: 110px;
  height: 35px;
}

.btn-save{
  width: 740px;
  height: 50px;
}

.link-box {
  width: 800px;
  overflow: hidden;
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

.link-box:hover {
  box-shadow: 0 0 20px teal;
  cursor: pointer;
}

a {
  text-decoration: none;
  color: teal;
}

</style>