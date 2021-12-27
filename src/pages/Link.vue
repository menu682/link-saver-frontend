<template>
<Navbar/>
  <div class="row m-5 add-box" id="add-box" :style="`height: ${height}`">
    <div class="col-12">
      <button class="btn-lg btn-outline-success" @click="showAdd">добавить ссылку</button>
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
          <button class="btn-lg btn-outline-success btn-save" @click="addLink()">сохранить изменения</button>
        </div>
      </div>
    </div>




  </div>



  <LinkCard v-for="link in links" :key="link.id" :link="link"/>
</template>

<script>
import axios from "axios";
import LinkCard from "../components/Link-card";
import Navbar from "../components/Navbar";

export default {
  name: "Link",
  components: {Navbar, LinkCard},
  props: [ "id" ],
  data() {
    return {
      links: [],
      categoryId: this.id,
      height: "50px",
      linkName: "",
      linkUrl: ""
    }
  },
  created() {

    this.getAllLinks()

  },
  methods: {

    showAdd(){
      let el = document.getElementById("add-box")
      el.style.height = "280px";
    },

    hideAdd(){
      let el = document.getElementById("add-box")
      el.style.height = "50px";
    },

    addLink(){

      const url = "http://localhost:8080/api/link/"
      const token = localStorage.token

      const data = {
        "linkName": this.linkName,
        "url": this.linkUrl,
        "categoryId": this.categoryId
      }

      axios.post(url, data, {
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
        this.hideAdd()

      }).catch(err => {

        if (err.response) {
          this.$notify({
            type: "error",
            title: "Ошибка",
            text: err.response.data.message
          });
        }
      })

    },

    payload(categoryLinks) {
      let links = []
      for (let i = 0; i < categoryLinks.length; i++) {
        categoryLinks[i].categoryId = this.categoryId
        links.push(categoryLinks[i])
      }
      return links
    },

    getAllLinks(){

      const url = "http://localhost:8080/api/category/" + this.categoryId
      const token = localStorage.token

      axios.get(url,
          {
            headers: {
              "Authorization": token
            }
          }).then(res => {
            this.links = this.payload(res.data.categoryLinks)

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

div{
  color: teal;
}

.add-box{
  overflow: hidden;
}

</style>