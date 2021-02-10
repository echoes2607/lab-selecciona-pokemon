const PokemonService = {
    getCompleteListPokemon(){
         fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
        .then(result => result.json())
        .then(data => {
            console.log(data.results)
            return data.results
        })
    }
}

export default PokemonService