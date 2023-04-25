import './App.css';
import MainPage from './pages/MainPage';


// дз3)создать счетчик где изначальное состояние 0,
//  кликая на "+" число увел на 1, кликая на "-"  
//  число уменьшается на 1 и не становится меньше 0, 
// делаем строго через redux

function App() {
  return (
    <div className="App">
      <MainPage/>
    </div>
  );
}

export default App;
