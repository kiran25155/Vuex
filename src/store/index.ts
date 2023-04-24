import { createStore } from 'vuex'
import api from '../api/product'
export default createStore({
  state: {
    products:[{}],
  },
  getters: {
  },
  mutations: {
    setProducts(state,data){
      console.log(state.products.push(data));
    },
   
    deleteProduct(state,data){
      state.products.splice(data,1)
      console.log(state.products)
    },
    
    UpdateProduct(state,data){
      const n=data.index;
      console.log(n)
      
      state.products.splice(n,1,data)
    }
  },
  actions: {
    setProduct(context,data){
      context.commit('setProducts',data);
    },
    deleteProduct(context,data){
      context.commit('deleteProduct',data)
    },
    UpdateProduct(context,data){
      context.commit('UpdateProduct',data);
    }
  },
  modules: {
   
  }
})



