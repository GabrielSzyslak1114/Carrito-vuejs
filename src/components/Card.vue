<template>
  <div class="col-4 col-sm-4 col-md-4 col-lg-3 ">
      <div class="card mt-2">
          <img :src="productos.imgurl" :alt="`imagen-${productos.nombre}`" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">{{productos.nombre}}</h5>
                <p class="card-text">$ <span>{{productos.precio}}</span></p>
                <button class="btn btn-dark" @click="agregar(productos)">Comprar</button>             
            </div>
      </div>    
  </div>
  
</template>

<script>
  import {useStore} from "vuex"
export default {
  name: 'Card',
  props:['productos'],
  setup(){
    const store = useStore()
    const agregar = (productos)=> {
      store.dispatch('agregarCarrito', productos)
    }
    return{agregar}
  }
}

</script>

<style>

</style>