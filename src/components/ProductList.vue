<template>
{{ProductList()}}

<div v-if="display">
    <h1>Edit Form</h1>
    <label>Product Name</label><br/>
    <input v-model="productName"/><br/>
    <label>Product Description</label><br/>
    <input v-model="productDescription"/><br/>
    <label>Product Price</label><br/>
    <input v-model="productPrice"/><br/>
    <label>Product Quantity</label><br/>
    <input v-model="productQuantity"/><br/>
    <button @click="UpdateProduct">Edit</button>
    </div>
    <h1>Product List</h1>
    <table>
        <thead>
            <tr>
                    <th>Product Id</th>
                    <th>Product Name</th>
                    <th>Product Description</th>
                    <th>Product Cost</th>
                    <th>Product Quantity</th>
                    <th>Action</th>
            </tr>
        </thead>
        <tbody>
         
              <tr  v-for="product in products" :key='product.productId'>
                <td>{{product.productId}}</td>
                <td>{{product.productName}}</td>
                <td>{{product.productDescription}}</td>
                <td>{{product.productPrice}}</td>
                <td>{{product.productQuantity}}</td>  
                <td><a @click="editProduct(product.productId)" >Update</a> &nbsp;
                    <a @click="deleting(product.productId)" >Delete</a>
                </td>
                </tr>
           
        </tbody>
    </table>
</template>
<script>
import { defineComponent } from 'vue'
import store from '@/store/index.ts'
export default defineComponent({
   
    data() {
    return{
        id:0,
        index:0,
        products:[],
        display:false,
        product:{
        productId:'',    
        productName:"",
        productDescription:"",
        productPrice:"",
        productQuantity:""
        },
        productId:'',    
        productName:"",
        productDescription:"",
        productPrice:"",
        productQuantity:"",
        msg:Boolean
    }
    },
   methods:{
     ProductList()
     {
        this.products=store.state.products;  
     },
     deleting(e)
     {
        console.log(this.index=store.state.products.findIndex((ele)=>{
        return ele.productId==e
        }))
        store.state.products[this.index]
      store.dispatch('deleteProduct',this.index)
     },

     editProduct(e)
       {
        this.msg=false
        this.$emit('sendMsg',this.msg)
        this.id=e;
         console.log(this.index=store.state.products.findIndex((ele)=>{
        return ele.productId==e
        }))
        this.display=true;
       },
    UpdateProduct()
     {
       this.display=false;
       store.dispatch('UpdateProduct',{'productId':this.id,
          'productName':this.productName,
          'productDescription':this.productDescription,
          'productPrice':this.productPrice,
          'productQuantity':this.productQuantity,'index':this.index})
    }
   },
   beforeMount(){
       store.state.products.splice(0,1)
      },
}   
)
</script>
<style scoped>
table,tr,td,th{
   border: 1px solid;
   border-collapse: collapse;
}
</style>
