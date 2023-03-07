import React from 'react'
import PokemonCard from '../PokemonCard/PokemonCard'
import classes from './list.module.css'
// import { useState } from 'react';
// import { useEffect } from 'react';
// import axios  from 'axios'


const List = ({ list }) => {

    // const [url, setUrl] = useState([])

    //    useEffect(()=>{
    //     axios.get(list).then(res=>{
    //         setUrl(res.data.result.map(r=> r.url))
    //        })    
    //    },[list])

    //    const pokemonInfo = (url) =>{
    //     let data ={}
    //     axios.get(url).then(res=>{
    //         data.name =res.data.name
    //         data.images = res.data.sprites.other.dream_world.front_default
    //     })
    //     return data
    //    }

//   const fetchData = async(id) => {
//         try { 
//             console.log(id);
//             const { data2 } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
//             setUrl(data2.result)
           
//         } catch (error) {
//             console.log('error');
//         }
//     }

//     useEffect(() => {
//         fetchData()
//     }, [])
//     console.log(url);

    return (
        <div className={classes.container}>
            <div className={classes.card__lists}>
                {
                    list.map((item, index) => <PokemonCard
                        key={index}
                        item={item}
                        // image={item.sprites.other.dream_world.front_default}
                    />)}
            </div>
        </div>
    )
}

export default List