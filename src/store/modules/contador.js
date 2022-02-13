import {createStore} from "vuex"
export default createStore({
    namespaced: true,
    state: {
      numero: 0
    },
    mutations: {
      aumentar(state){
          numero ++ 
      }
      }
  });
  