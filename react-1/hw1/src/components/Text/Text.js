import stich from './e.jpg'
import classes from './text.module.css'

const Text = () => {
  return (
   <div className={classes.topic}>
     <div className={classes.topic__item}>
      <div className={classes.topic__left}>
         <img className={classes.topic__image} src={stich}/>
          <h2>
            Massa tortor nibh nulla condimentum imperdiet scelerisque...
          </h2>
      </div>
      <div className={classes.topic__right}>
        <p>
          Nisi, sagittis aliquet sit rutrum. Nunc, id vestibulum quam ornare adipiscing.
          Pellentesque sed turpis nunc gravida pharetra, sit nec vivamus pharetra. Velit, dui
          , egestas nisi, elementum mattis mauris, magnis. Massa tortor nibh nulla condimentum
          imperdiet scelerisque... read more
        </p>
      </div>
    </div>
   </div>
  )
}
export default Text