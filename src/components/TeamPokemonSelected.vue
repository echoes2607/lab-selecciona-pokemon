<template>
    <div class="col-3">
        <div class="table-pokes-selected" :class="{'table-pokes-dark': $store.getters.darkMode}">
            <h3>Equipo elegido</h3>
            <div class="head-table">
                <span class="col-4 text-center">Nombre</span>
                <span class="col-4 text-center">Habilidad</span>
                <span class="col-4 text-center">Acción</span>
            </div>
            <div class="body-table">
                <div class="row-table" v-for="(pokemon, index ) in $store.getters.teamSelected" :key="index">
                    <span class="col-4 text-center">{{pokemon.name}}</span>
                    <span class="col-4 text-center">{{pokemon.ability}}</span>
                    <span class="col-4 text-center"><button v-on:click="deletePokemonToList(pokemon.id)" class="btn-delete">x</button></span>
                </div>
            </div>
            <button v-if="$store.getters.teamSelected" v-on:click="deleteAllPokemonToList" class="btn-delete-all">Quitar todos</button>
        </div>
    </div>
</template>


<script>
export default {
    name:'TeamPokemonSelected',
    data(){
        return{
        }
    },
    methods:{
        deletePokemonToList(id){
            let cloneArray = this.$store.getters.teamSelected
            let index = this.$store.getters.teamSelected.map(pokemon => pokemon.id).indexOf(id)
            cloneArray = cloneArray.splice(index, 1)
        },
        deleteAllPokemonToList(){
            this.$store.dispatch('deleteAllPokemonToListAction')
        }
    }
    
}
</script>