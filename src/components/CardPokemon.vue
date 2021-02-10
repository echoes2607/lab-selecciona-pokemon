<template>
    <div class="card-pokemon col-4" :id="id">
        <div class="card-content" :class="{'card-dark': $store.getters.darkMode}">
            <div class="card-header">
                <img :src="urlImg" alt="poke" class="card-header_image"/>
            </div>
            <div class="card-footer">
                <p class="card-footer__name"><span class="bold">Nombre:</span> {{ name }}</p>
                <p class="card-footer__hability"><span class="bold">Habilidad:</span> {{ ability }}</p>
                <div class="card-footer__types">
                    <span class="bold">Tipo: </span>
                    <div class="type-pokemon">{{type.length == 1 ? type[0] : type[0] + ' / '+ type[1]}}</div>
                </div>

                <div class="card-footer__buttons">
                    <button class="btn-card" v-on:click="addPokemonToList">Elegir Pokémon</button>
                    <button class="btn-card">Ver detalle</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardPokemon',
    data(){
        return{

        }
    },
    props:{
        id: {
            type: Number 
        },
        urlImg: {
            type: String
        },
        name:{
            type: String,
            default: '---'
        },
        ability:{
            type: String,
            default: '---'
        },
        type:{
            type: Array,
            default: []
        }
    },
    methods:{
        addPokemonToList(){
            this.$store.state.pokemonToAdd = {
                id: this.id,
                name: this.name,
                ability: this.ability
            }

            this.$store.dispatch('addPokemonToListAction')            
        }
    }
}
</script>