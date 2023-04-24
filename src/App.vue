<template>
  <div id="app">
    <create-product :msg="sendMessage"/>
    <product-list @sendMsg='getMsg($event)'/>
  </div>
</template>

<script>
import CreateProduct from './components/CreateProduct.vue'
import ProductList from './components/ProductList.vue'

export default {
  name: 'App',
  components:{CreateProduct,ProductList},
  data(){
    return{
     sendMessage:''
    }
  },
  methods:{
    getMsg(e){
      
      console.log(this.sendMessage=e);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
