import { Link, Outlet } from "react-router-dom";
//Обертка header footer
//приложение обернуто не просто в page wrapper но и и еще во что-то
const Layout = () => {
  return (
    <div>
      <div className='layot__header'>
        <Link to='/'>Main</Link>
        <Link to='/list'>List</Link>
        <Link to='/about'>About</Link>
      </div>
      <Outlet />
      <div>
        Footer
      </div>
    </div>
  )
}

export default Layout