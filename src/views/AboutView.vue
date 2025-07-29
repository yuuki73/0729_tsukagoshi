<template>
  <div class="about">
    <h1>お気に入り犬🐶</h1>
     <img :src="message">
  </div>
</template>
 
<script>
export default {
 
  computed: {
    message() {
      return this.$store.state.data
    },  
  },
 
}
</script>
 
 