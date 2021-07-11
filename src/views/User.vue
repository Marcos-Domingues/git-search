<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-3"/>
        <div class="col-6 card-user">
          <button @click="$router.push({name: 'search'})" class="btn-success float-left">Return</button>
          <img :src="user.avatar_url" alt="" />
          <h2>{{ user.login }}</h2>
          <span class="nav-item d-flex justify-content-center" @click="openUrl(user.html_url)">GitHub Profile: <p>{{ user.html_url }}</p></span>
         <div v-if="foundRepos">
          <h2>Some repositories</h2>
          <div class="repo-card d-flex flex-column" v-for="(item, index) in repos" :key="index">
            <h3 class="nav-item" @click="openUrl(item.html_url)">{{item.name}}</h3>
            <p>{{ item.description }}</p>
            <div class="infos">
            <span>Language: <p>{{ item.language }}</p></span>
            <span>Updated at: <p>{{ formatDate(item.updated_at) }}</p></span>
            <span>Created at: <p>{{ formatDate(item.created_at) }}</p></span>
            </div>
          </div>
         </div>
         <div v-else>
           <h2>Sorry, no repositories where found</h2>
         </div>
        </div>
        <div class="col-3"/>
      </div>
    </div>
  </section>
</template>

<script>
import {findRepos} from "../services/index.js"

export default {
  data() {
    return {
      user: this.$route.params,
      repos: [],
      foundRepos: false
    };
  },

  mounted(){  
    this.fetchRepositories()
  },
  methods: {
    openUrl(url) {
      window.open(url, "_blank");
    },

    fetchRepositories(){
      findRepos(this.$route.params.login, '4').then((resp) => {
        this.foundRepos = resp.data.length == 0 ? false : true
        this.repos = resp.data;
      })
    },

    formatDate(date){
      return `${date[0]}${date[1]}${date[2]}${date[3]}/${date[5]}${date[6]}/${date[8]}${date[9]}`
    },
  },
};
</script>
<style scoped>
.card-user{
  background-color: #282828;
  border-radius: 5px;
  position: relative;
}

img{
  margin-top: 30px;
  width: 40%;
  border-radius: 50%;
}

.container{
  color: #fff;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;;
}

h2{
  margin-top: 25px;
}

.nav-item{
  cursor: pointer;
}

p{
  color: #535353;
  margin-left: 5px;
}

.repo-card{
  background-color: #181818;
  border-radius: 15px;
  padding: 15px;
  margin-bottom: 15px
}

.infos{
  display: flex;
  justify-content: flex-start;
}

h3{
  float: left;
}

.repo-card span{
  display: flex;
  justify-content: center;
  margin: 0 10px;
}

.btn-success{
  position: absolute;
  left: 0;
  top: 15px;
  border-radius: 24px;
  padding: 10px 28px;
  margin-left: 20px;
  border-color: #1DC95B;
  background-color: #1DC95B;
  border-style: none;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

.btn-success:hover{
  background-color: #1DB954;
  transition: 300ms;
}

.btn-success:focus{
  box-shadow: none !important;
}
</style>