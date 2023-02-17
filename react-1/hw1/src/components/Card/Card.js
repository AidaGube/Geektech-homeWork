import classes from './card.module.css'

const Card = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes.card__latest}>
          <div className={classes.card__lists}>
            <div className={classes.card__list}>
            <div class={classes.card__title}>
               <h3>{props.title}</h3>
                <p>{props.p}</p>
           </div> 
            </div>
          </div>
      </div>
    </div>
  )
}
export default Card