<template>
      <div class="container">
      <div class="row">
        <div class="col-4" v-for="(item, index) in list" :key="index">
          <router-link class="redirect" :to="{name: 'user', params: item}">
            <div class="avatar-card">
              <img class="avatar" :src="item.avatar_url" />
              <h2>{{ item.login }}</h2>
            </div>
          </router-link>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  props: ["list"]
};
</script>
<style scoped>
.avatar {
  max-width: 69%;
  border-radius: 50%;
  margin-top: 20px;
}

.redirect {
  text-decoration: none;
  color: #fff;
  margin-bottom: 30px;
}

.avatar-card {
  background-color: #282828;
  width: 70%;
  border-radius: 2%;
  margin-bottom: 25px;
}

.avatar-card:hover {
  background-color: #535353;
  cursor: pointer;
  transition: 700ms;
}

.avatar-card h2 {
  padding-bottom: 20px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
</style>
