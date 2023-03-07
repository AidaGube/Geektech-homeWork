import { useEffect, useState } from "react";
import { fetchPokemons } from "./api/fetchPokemons";
import List from "./components/List/List";

const App = () => {
  const [theme, setTheme] = useState('dark')
  const [list, setList] = useState([])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

  useEffect(() => {
    fetchPokemons(setList)
  }, [])
  console.log(list);
  
  

  return (
    <div className={`app ${theme}`}>
      <List
      list={list}
      />
      <button onClick={toggleTheme} className="button"> Change theme </button>
    </div>
  );
}

export default App;
