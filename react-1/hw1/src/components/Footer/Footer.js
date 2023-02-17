import classes from './Footer.module.css'
const Footer = () => {
  return (
   <div className={classes.footer}>
     <div className={classes.footer__row}>
      <div className={classes.footer__items}>
        <div className={classes.footer__item}>
          <h4>Hot Topics</h4>
          <ul>
            <li><a href="">testing</a></li>
            <li><a href="">Abandonment recovery</a></li>
            <li><a href="">Customer insights</a></li>
          </ul>
        </div>
        <div className={classes.footer__item}>
          <h4>Sport</h4>
          <ul>
            <li><a href="">card recommendations</a></li>
            <li><a href="">card badging</a></li>
            <li><a href="">Journey personalization</a></li>
          </ul>
        </div>
      </div>
    </div>
   </div>
  )
}
export default Footer