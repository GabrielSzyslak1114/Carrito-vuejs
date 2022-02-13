<template>
    <tr>
      <th scope="row"> {{i.id}}</th>
        <td >{{i.nombre}}</td>
        <td>{{i.cantidad}}</td>
        <td>
            <button class="btn btn-success btn-sm boton-item-red" @click="aumentarCarrito(i.id)">+</button>
            <button class="btn btn-primary btn-sm boton-item-azul" @click="disminuirCarrito(i.id)">-</button>   
        </td>
        <td>${{i.precio * i.cantidad}}</td>
    </tr>
</template>

<script>
import {useStore} from 'vuex'
export default {
    name: "Item",
    props: ['i'],
    setup(){
        const store = useStore()
        const aumentarCarrito = (id)=> {store.commit('aumentar', id)}
        const disminuirCarrito = (id)=> {store.commit('disminuir', id)}
        return{ aumentarCarrito, disminuirCarrito}
    }
}
</script>


