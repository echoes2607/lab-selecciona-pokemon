<template>
    <div class="cards-container col-9">
        <Loader v-if="loading"/>
        <CardPokemon 
            v-for="pokemon in pokeData" v-bind:key="pokemon.id"
            :id="pokemon.id"
            :urlImg="pokemon.urlImg"
            :name="pokemon.name"
            :ability="pokemon.ability"
            :type="pokemon.types"
        />
    </div>
</template>

<script>
import CardPokemon from'./CardPokemon';
import Loader from './Loader'
export default {
    name: 'ListPokemon',
    components:{
        CardPokemon,
        Loader
    },
    data(){
        return{
            allPokes : null
        }
    },
    props:{
        loading:{
            type: Boolean
        },
        pokeData:{
            type: Array
        }
    }
}
</script>