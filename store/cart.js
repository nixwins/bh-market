import {mutationTypes as mainMutationTypes} from "./index";
import { ALREADY_ADDED } from "~/helpers/constatns"

export const state = ()=>({
  products:[],
  isShowCart:false,
})

export const actionTypes = {
  addProductToCart:"addProductToCart",
  removeProductFromCart:"[remove] remove product from cart",
  restoreProducts:"[restoreProducts] restoreProducts"
}
export const mutationTypes = {
  setProduct: "setProduct",
  setIsShowCart:"setIsShowCart",
  removeProduct:"removeProduct",
  setProducts:"[setProducts] restore products from localstorage"
}

export const mutations = {
  [mutationTypes.setProduct](state, product){
    state.products.push(product)
  },
  [mutationTypes.setIsShowCart](state){
    state.isShowCart = !state.isShowCart;
  },
  [mutationTypes.removeProduct](state, index){
    state.products.splice(index, 1);
  },
  [mutationTypes.setProducts](state, products){
     state.products = products;
  }
}

export const actions = {
  [actionTypes.addProductToCart]({commit, state}, product){
    
    if(!state.products.some(p => p.id === product.id)){
      commit(mutationTypes.setProduct, product)
      return;
    }
    commit(mainMutationTypes.setSnackbar, {isShow:true, text:ALREADY_ADDED}, {root:true})

  },
  [actionTypes.removeProductFromCart]({commit, state}, product){
   
    const findIndex = state.products.findIndex(p=>p.id === product.id);
    commit(mutationTypes.removeProduct, findIndex)
  },
  [actionTypes.restoreProducts]({commit}, products){
    commit(mutationTypes.setProducts, products)
  }
}

export const getters = {
  totalCount:(state)=>state.products !== null ? state.products?.length : 0,
}