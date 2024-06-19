<template>
  <div class="dashboard">
    <Header/>
    <ProductGrid/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import ProductGrid from '@/components/product-grid.vue'

export default {
  name: 'DashboardView',
  components: {
    Header, ProductGrid
  }
}
</script>

<style scoped>
.dashboard {
  width: 1140px;
  max-width: 1140px;
}
</style>
