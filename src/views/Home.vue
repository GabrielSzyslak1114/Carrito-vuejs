<template>
  <section class="container p-3">

    <div class="alert alert-success mt-5" role="alert">
      Probando carrito de compras con Vue3 <a href="https://www.linkedin.com/in/gabriel-alberto-rodríguez-ruíz-b04882209" class="alert-link">Mi linkedin</a>. (solo es una simple prueba, prodria ser mejor).
    </div>

      <main class="row p-4" >
        <Card v-for="producto of productos" :key="producto.id" :productos="producto"/>
      </main>
      <main class="mt-5">
      <Carrito />
      </main>

  </section>
</template>

<script>
import Card from "../components/Card.vue";
import Carrito from "../components/Carrito.vue"
import {useStore} from "vuex";
import {computed, onMounted} from "vue";

export default {
  name: "Home",
  components: {
    Card, Carrito
   
  },
  setup(){
    const store = useStore()
    onMounted(()=>{
      store.dispatch('fetchData')
    });

    const productos = computed(()=> store.state.productos)
    return {productos}

  }
};
</script>
