import React from 'react'
import classes from './pokemonCard.module.css';
import img from './e.jpg';

const PokemonCard = () => {
  return (
    <div className={classes.card__pokemons}>
      <div className={classes.container}>
        <div className={classes.card__lists}>
          <div className={classes.card__list}>
          <div className={classes.card__img}>
                <img src={img} alt='logo'/>
            </div>
            <div className={classes.card__title}>
               <h3>Aida</h3>
           </div> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokemonCard