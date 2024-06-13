<template>
  <div class="dashboard">
    <Header msg="Welcome to Your Vue.js App"/>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  name: 'DashboardView',
  components: {
    Header
  }
}
</script>

<style scoped>
.dashboard {
  width: 1140px;
  max-width: 1140px;
}
</style>
