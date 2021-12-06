<template>

    <div class="row m-5">
      <h2>Сервис хранения ссылок</h2>
      <p>Для полноценной работы с сервисом нужно <router-link to="/login" class="link-success">войти</router-link> в свою учётную запись</p>
      <p>Если у Вас нет учётной записи, её нужно <router-link to="/register" class="link-success">создать</router-link></p>
    </div>

</template>

<script>

export default {
  name: "Home",
}
</script>

<style scoped>

</style>