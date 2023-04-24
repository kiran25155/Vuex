<template>
<div v-if="this.message">
    <h1>Product Form</h1>
<label>Product Name</label><br/>
    <input v-model="productName"/><br/>
    <label>Product Description</label><br/>
    <input v-model="productDescription"/><br/>
    <label>Product Price</label><br/>
    <input v-model="productPrice"/><br/>
    <label>Product Quantity</label><br/>
    <input v-model="productQuantity"/><br/>
    <button @click="fromSubmit">Submit</button>
</div>
</template>
<script>
import store from '@/store/index.ts'
export default {
    props:['msg'],
 
   data() {
       return{
        message:true,
        c:0,
        product:{
        productName:"",
        productDescription:"",
        productPrice:"",
        productQuantity:""
        }
        
       } 
    },
    methods:{
        fromSubmit(){
           store.dispatch('setProduct',{
          'productId':this.c,
          'productName':this.productName,
          'productDescription':this.productDescription,
          'productPrice':this.productPrice,
          'productQuantity':this.productQuantity })
            this.c++;
        },
        
    },
    beforeUpdate(){
        if(this.msg==false){
            this.message=false
        }
    }
}
</script>