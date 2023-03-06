import axios from "axios"

const baseUrl = 'https://pokeapi.co/api/v2/'

export const fetchPokemons = async(setList) => {
    try {
        const { data } = await axios.get(baseUrl + 'pokemon/')
        setList(data.results)
    } catch (error) {
        console.log('error');
    }
}
