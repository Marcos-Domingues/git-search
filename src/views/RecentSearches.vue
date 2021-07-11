<template>
  <div class="container">
    <div class="row">
      <div class="col-3" />
      <div class="col-6 content-block">
          <h2>Recent Searches</h2>
        <button class="btn-success" @click="$router.push({ name: 'search' })">
          Return
        </button>
        <div class="mb-3" v-if="results">
          <div
            v-for="(item, index) in $store.getters.searchedUsers"
            :key="index"
          >
            <div class="searched-rows">
              <span  @click="$router.push({name: 'search', params: {item}})">Searched for "{{ item }}"</span>
            </div>
          </div>
        </div>
        <div v-else>
            <h2>Sorry, no searches made yet</h2>
        </div>
      </div>
      <div class="col-3" />
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            results: false
        }
    },

  created() {
    this.results = this.$store.getters.searchedUsers.length == 0 ? false : true
  },
};
</script>

<style scoped>
.content-block {
  width: 100%;
  background-color: #282828;
  border-radius: 15px;
  position: relative;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: #fff;
}

.btn-success {
  position: absolute;
  left: 0;
  top: 15px;
  border-radius: 24px;
  padding: 10px 28px;
  margin-left: 20px;
  border-color: #1dc95b;
  background-color: #1dc95b;
  border-style: none;
  
}

.btn-success:hover {
  background-color: #1db954;
  transition: 300ms;
}

.btn-success:focus {
  box-shadow: none !important;
}

h2{
    margin-top: 30px;
    padding-bottom: 15px;
}

span{
    cursor: pointer;
}
</style>