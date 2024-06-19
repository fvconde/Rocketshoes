<template>
  <div class="header">
    
    <!-- <h1>{{ msg }}</h1> -->
    <div class="logo">
      <img src="../assets/logo.svg" alt="logo">
    </div>
    <div class="cart">
      <div class="numberOfItens">
        <p style="color: white; margin: 0px"><b>Meu carrinho</b></p>
        <p style="color: #757477; margin: 0px">0 itens</p>
      </div>
      
      <i class="fa-solid fa-cart-shopping fa-2x icon-white"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
  
}

.icon-white {
  color: white;
}

.header {
  margin-top: 50px;
  margin-bottom: 50px;
  width: 1140px;
  max-width: 1140px;
  height: 50px;
  display: flex;
  justify-content: space-between;
}

.cart {
  display: flex;
}

.numberOfItens {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 10px;
}
</style>
