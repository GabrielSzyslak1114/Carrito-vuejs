import {createStore} from "vuex"
export default createStore({
    namespaced: true,

    state: {
      carrito: {}
    },
    mutations: {
      setCarrito(state, payload){
        state.carrito[payload.id] = payload
      }
    },
    actions: {
     agregarCarrito({ commit, state}, productos){
      state.carrito.hasOwnProperty(productos.id)
        ? productos.cantidad = state.carrito[productos.id].cantidad + 1
        : productos.cantidad = 1
        commit('setCarrito', productos)
        console.log(productos)
     }
    }
  });
  