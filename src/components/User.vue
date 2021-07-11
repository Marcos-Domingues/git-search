<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-6">
          <img :src="user.avatar_url" alt="" />
          <h2>{{ user.login }}</h2>
          <span @click="openUrl(user.html_url)">GitHub Profile: {{ user.html_url }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: this.$route.params,
    };
  },

  mounted(){
      console.log(typeof(this.$route.params));
      if(!this.$route.params){
          this.$router.push({name: "search"})
      }
    },
  methods: {
    openUrl(url) {
      console.log("teste");
      window.open(url, "_blank");
    },
  },
};
</script>
