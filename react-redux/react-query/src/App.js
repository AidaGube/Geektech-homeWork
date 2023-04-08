import { useGetTodosQuery } from './QueryApi/reduxApi';

function App() {
  const { data } = useGetTodosQuery();

  console.log(data);
  return (
    <div className="App">
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
