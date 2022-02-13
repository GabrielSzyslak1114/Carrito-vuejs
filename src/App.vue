<template >
  <Header/>
  <router-view class="bg bg-dark"/>
</template>

<script>
  import Header from './components/Header.vue'
  export default {
    name: 'App',
    components: {
      Header
    }
  }
</script>
