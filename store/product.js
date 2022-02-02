import {mutationTypes as mainMutationTypes} from "./index";
import ProductService from "~/api/ProductService";

export const state = ()=>({
  data:[],
  isLoading:false,
  error:null,
})

export const actionTypes = {
  loadAllProducts:"loadAllProducts",
  loadProduct:"loadProduct"
}
export const mutationTypes = {
  loadAllProductsStart: 'loadAllProductsStart',
  loadAllProductsSuccess: 'loadAllProductsSuccess',
  loadAllProductsFailure: 'loadAllProductsFailure',
  loadProductStart: 'loadProductStart',
  loadProductSuccess: 'loadProductSuccess',
  loadProductFailure: 'loadProductFailure',
}


export const mutations = {
  [mutationTypes.loadAllProductsStart](state) {
    state.isLoading = true
    state.data = null
  },
  [mutationTypes.loadAllProductsSuccess](state, payload) {
    state.isLoading = false
    state.data = payload
  },
  [mutationTypes.loadAllProductsFailure](state) {
    state.isLoading = false
  },

  [mutationTypes.loadProductStart](state) {
    state.isLoading = true
    state.data = null
  },
  [mutationTypes.loadProductSuccess](state, payload) {
    state.isLoading = false
    state.data = payload
  },
  [mutationTypes.loadProductFailure](state) {
    state.isLoading = false
  }
}


export const actions = {

  [actionTypes.loadAllProducts]({commit}, page){
    const productService = new ProductService(this.$axios)
    commit(mutationTypes.loadAllProductsStart);
    return new Promise(resolve=>{
      productService
        .getAllProducts(page)
        .then(products=>{
            commit(mutationTypes.loadAllProductsSuccess, products)
            resolve(products)
        })
        .catch(()=>{
          commit(mutationTypes.loadAllProductsFailure)
        })

    })
  },

  [actionTypes.loadProduct]({commit}, slug){
    const productService = new ProductService(this.$axios)
    commit(mutationTypes.loadProductStart);
    return new Promise(resolve=>{
      productService
        .getProduct(slug)
        .then(product=>{
            commit(mutationTypes.loadProductSuccess, product)
            console.log("DFKDFJSDKLFJDSLKF", product)
            resolve(product)
        })
        .catch((e)=>{
          commit(mutationTypes.loadProductFailure)
           commit(mainMutationTypes.setSnackbar, {isShow:true, text:"Ошибка" + e.message}, {root:true})
        })

    })
  }
}
