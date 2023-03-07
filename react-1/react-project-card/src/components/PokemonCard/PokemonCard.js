import React from 'react'
import classes from './pokemonCard.module.css';


const PokemonCard = ({ item }) => {
return (
  <div className={classes.card__pokemons}>
    <div className={classes.card__list}>
      <div className={classes.card__img}>
        <img src={item.image} alt='pokemon_img' />
      </div>
      <div className={classes.card__title}>
        <h3>{item.name}</h3>
      </div>
    </div>
  </div>
)
}

export default PokemonCard