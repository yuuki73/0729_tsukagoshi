<template>
<div class="hello">
 
<h1>閲覧した犬🐶: {{ count }}匹</h1>
<v-list-item-action>
  <div class="botton-pverlay">
<v-btn class="btn" color="primary" @click="fetchData();addCount();">
  次へ
</v-btn>
 
<v-btn class="btn" color="primary" @click="about">
  お気に入り
</v-btn>
  </div>

</v-list-item-action>
          <img :src="message">
  </div>
 
</template>
 
<style>

.btn {
  border: 1px solid #000000;
  color: #000000;
  background: #ffffb7;
  cursor: pointer;
  padding: 5px;
  border-radius: 10px;
  margin: 0px 5px;
  margin-top: 5px; 
  margin-bottom: 10px; 
}
 
img {
  width: 500px;
  height: 430px;
  object-fit: cover;
  border-radius: 10px;
  margin-top: 20px;
}
 
</style>
 
 
<script>
export default {
  name: 'ProductList',
  computed: {
    message() {
      return this.$store.state.data
    },
    count() {
      return this.$store.getters['count']
  },  
  },
  methods: {
    fetchData() {
      this.$store.dispatch('fetchData')
    },
    about(){
      this.$router.push('/about')
    },
    addCount() {
      this.$store.commit('addCount')
    },

    addFavorite() {
    this.$store.dispatch('addFavorite', this.message)  
  }

  },
  created() {
    this.fetchData()
  }
}
</script>