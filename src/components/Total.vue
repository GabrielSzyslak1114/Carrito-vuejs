<template>

  <th scope="row" colspan="2">Total productos</th>
  <td>{{totalCantidad}}</td>
  <td>
      <button class="btn btn-danger" id="vaciar-carrito" @click="vaciar">Vaciar Todo</button>
  </td>
  <td class="font-weight-bold">$ <span>{{totalPrecio}}</span></td>

</template>

<script>
  import { useStore } from "vuex";
    import {computed} from 'vue';

    export default {
        name: "Total",
        setup() {
            const store = useStore()
            const totalCantidad = computed(()=> store.getters.totalCantidad)
            const totalPrecio = computed(()=> store.getters.totalPrecio)
 

            const vaciar = ()=> {store.commit('vaciarCarrito')}

                       return {totalCantidad, totalPrecio, vaciar}
        }
}
</script>

