<template>
  <div class="home">
    <Toolbar />
    <div class="select-container" :class="{'select-dark': $store.getters.darkMode}">
        <p>Selecciona el tipo por el cual quieres filtar la lista de pokémon:</p>
        <select class="custom-select">
            <option>grass</option>
            <option>dragon</option>
            <option>fire</option>
            <option>poison</option>
        </select>
    </div>
    <div class="content content-container" :class="{'content-dark': $store.getters.darkMode}">
        <ListPokemon 
          v-bind:loading="loading"
          v-bind:pokeData="pokeData"
        />
        <TeamPokemonSelected/>
    </div>
  </div>
</template>


<script>
import Toolbar from '../components/Toolbar';
import ListPokemon from '../components/ListPokemon';
import TeamPokemonSelected from '../components/TeamPokemonSelected';
export default {
  name: 'Home',
  components: {
    Toolbar,
    ListPokemon,
    TeamPokemonSelected
  },
  data(){
    return{
      pokeData : null,
      loading: false,
      error: false
    }
  },
  created(){
    this.getAllPokemon()
  },
  methods:{
    toggleDarkMode(){
      this.darkMode = !this.darkMode
      console.log("hola desde el padre")
    },
    getAllPokemon() {
      let resumeData = [];
      fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
        .then(res => res.json())
        .then(data => {
          data.results.forEach((pokemon)=>{
            fetch(pokemon.url)
            .then(res => res.json())
            .then(data => {
                resumeData.push({
                  id: data.id,
                  urlImg: data.sprites.other.dream_world.front_default,
                  name:data.name,
                  ability: data.abilities[0].ability.name,
                  types: data.types.length == 2 ? [data.types[0].type.name,data.types[1].type.name] : [data.types[0].type.name]
                });

            })
          });

          this.pokeData = resumeData;
          this.loading = false;
        })
        .catch(err => {
          this.loading = false;
          this.error = true;
        })
    }
  }
}
</script>
