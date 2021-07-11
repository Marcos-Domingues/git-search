<template>
  <section>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Procure por um usuário"
            aria-label="Search"
            v-model="searchName"
            @keypress.enter="fetchGivenUser()"
          />
      </div>
    </nav>

    <div class="container">
      <div class="row">
        <div class="col-4" v-for="(item, index) in ListedUsers" :key="index">
          <router-link class="redirect" :to="{name: 'user', params: item}">
            <div class="avatar-card">
              <img class="avatar" :src="item.avatar_url" />
              <h2>{{ item.type }}</h2>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { allUsers, fetchUsers } from "../services/index";

export default {
  data() {
    return {
      usersList: [],
      searchName: "",
      page: 0,
      searchedList: [],
      searchedPage: 0
    };
  },

  computed: {
    ListedUsers(){
      var newArray = []
      console.log(this.searchName);
      if(!this.searchName){
        newArray = this.usersList
      }else{
        newArray = this.searchedList
      }
      return newArray;
    }
  },

  created() {
    this.findUsers();
  },

  methods: {
    findUsers() {
      allUsers(this.page)
      .then((resp) => {
        this.usersList = resp.data;
      });
    },

    fetchGivenUser(){
      fetchUsers(this.searchName, this.searchedPage)
       .then((resp) => {
        this.searchedList = resp.data.items;
      });
    }
  },
};
</script>

<style scoped>
.avatar {
  max-width: 75%;
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

.container-fluid{
  justify-content: center;
}

.navbar{
  margin-bottom: 30px;
}

.navbar input{
  border-radius: 18px;
}

.navbar input{
  width: 23%;
  height: 42px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

.form-control:focus{
  border: none !important;
  box-shadow: none;
}
</style>
