<template>

        <table class="table table-hover table-dark">
            <thead >
                <tr >
                    <th scope="col" class="item-body-tr">#</th>
                    <th scope="col">item</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Accion</th>
                    <th scope="col">Total</th>
                </tr>
            </thead>
            <tbody id="items">
            <Item v-for="i in items" :key="i.id" :i="i"/>    
            </tbody>
            <tfoot>
                <tr id="footer-carrito">
                    <th scope="row" colspan="5" v-if="Object.keys(items).length === 0"> Carrito vacio</th>
                    <Total v-else />
                </tr>
            </tfoot>
        </table>

</template>

<script>
import Item from "./Item.vue"
import Total from './Total.vue'
import { computed } from '@vue/reactivity'
import {useStore} from "vuex"
export default {
    name: 'Carrito',
    components: {
    Item, Total
    
    },
    setup(){
        const store = useStore()
        const items = computed(()=> store.state.carrito)
        return {items}
    }
}
</script>
