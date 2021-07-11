<template>
  <section>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search for users"
            aria-label="Search"
            v-model="searchName"
            @keypress.enter="fetchGivenUser()"
          />
          <button @click="$router.push({name: 'recent'})" class="btn-success">Recent searches</button>
      </div>
    </nav>
    <Card :list="displayedList"/>
  </section>
</template>

<script>
import { allUsers, fetchUsers } from "../services/index";
import Card from '../components/UserCard.vue'

export default {
  components: {
    Card
  },
  data() {
    return {
      usersList: [],
      searchName: "",
      page: 0,
      searchedList: [],
      searchedPage: 0,
      displayedList: [],
      previousSearches: []
    };
  },

  mounted() {
    this.findUsers();
    this.searchName = this.$route.params.item
    if(this.searchName){
      this.fetchGivenUser(this.searchName)
    }
  },

  methods: {
    findUsers() {
      allUsers(this.page)
      .then((resp) => {
        this.usersList = resp.data;
        this.displayedList = resp.data;
      });
    },

    fetchGivenUser(){
     this.$store.commit("SET_SEARCHED_USER", this.searchName);
      fetchUsers(this.searchName, this.searchedPage)
       .then((resp) => {
        this.searchedList = resp.data.items;
        this.displayedList = resp.data.items;
      });
    }
  },

  watch:{
    searchName(newValue){
      if(newValue){
        this.displayedList = this.searchedList
      }else{
        this.displayedList = this.usersList
      }
    }
  }
};
</script>

<style scoped>
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

.btn-success{
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
