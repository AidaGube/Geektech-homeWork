import classes from './header.module.css';
import stich from './r.png'
const Header = () => {
  return (
    <div className="header">
        <div className={classes.menu__list}>
            <img className={classes.menu__logo} src={stich} />
          <div className= {classes.menu__item}>
            <ul>
              <li><a href="">Latest</a></li>
              <li><a href="">Sports</a></li>
              <li><a href="">Opinion</a></li>
              <li><a href="">Business</a></li>
              <li><a href="#card-latest">Entertainment</a></li>
              <li><a href="">Lifestyle</a></li>
            </ul>
          </div>
            <button className= {classes.addBtn}>Sign in / Sign up</button>
        </div>
      </div>
  )
}

export default Header