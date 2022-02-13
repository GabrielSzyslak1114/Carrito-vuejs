import { createStore } from "vuex";

export default createStore({
  state: {
    productos: [],
    carrito: {}
  },
  mutations: {
     setProductos(state, payload){
      state.productos = payload;
    },
    setCarrito(state, payload){
      state.carrito[payload.id] = payload
      
    },
    vaciarCarrito(state){
      state.carrito = {}
    },
    aumentar(state,payload){
      state.carrito[payload].cantidad += 1
    },
    disminuir(state,payload){
      state.carrito[payload].cantidad -= 1
      if (state.carrito[payload].cantidad === 0)[
        delete state.carrito[payload]
      ]
    }
  },
  actions: {
    async fetchData({ commit }) {
      try{
        const data = await fetch("api.json")
        const productos = await data.json();
        commit('setProductos', productos);
    } catch(error){
        console.log(error);
    }
   },
   agregarCarrito({ commit, state}, productos){
    state.carrito.hasOwnProperty(productos.id)
      ? productos.cantidad = state.carrito[productos.id].cantidad + 1
      : productos.cantidad = 1
      commit('setCarrito', productos)
      console.log(productos)
   }
  },
  getters:{
    totalCantidad(state){
      return Object.values(state.carrito).reduce((acc, {cantidad})=> acc + cantidad, 0 )
    },
    totalPrecio(state){
      return Object.values(state.carrito).reduce((acc, {cantidad, precio})=> acc + cantidad * precio, 0 )
    }

  },
  modules: { }
});

