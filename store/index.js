// import { actionTypes as productActonTypes} from '@/store/product'

export const state = () => ({
  snackbar:{
      isShow:false,
      text:''
  },
  currentPage:1,
});

export const  mutationTypes = {
  setSnackbar:"setSnackbar",
  setCurrentPage:"setCurrentPage"
}

export const  actionTypes = {
  changeSnackbar:"changeSnackbar"
}

export const mutations = {
  [mutationTypes.setSnackbar](state, payload){
    state.snackbar = payload
  },
  [mutationTypes.setCurrentPage](state, payload){
    state.currentPage = payload
  }
};
export const actions = {
  [actionTypes.changeSnackbar]({commit}, payload){
    commit(mutationTypes.setSnackbar, payload)
  },

  // async nuxtServerInit ({ dispatch, state }) {
  //   console.log("NINININI", state.currentPage )
  //    await dispatch(`product/${productActonTypes.loadAllProducts}`, state.currentPage)   
  // }
    
  
};


