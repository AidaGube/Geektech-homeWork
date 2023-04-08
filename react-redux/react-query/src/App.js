import './App.css';
import { useGetTodosQuery } from './QueryApi/reduxApi';

function App() {
  const { data } = useGetTodosQuery();
  console.log({ data });
  return (
    <div className="App">
      <ul>
        {data.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
