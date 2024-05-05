import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

// useEffect hook
function App() {
  const [todos, setTodos] = useState([]);
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then(async function(res) {
        const json = await res.json();
        setTodos(json.todos);
      });
  }, []);

  const filterTodos = (todos, filterText) => {
    return todos.filter(todo =>
      todo.title.toLowerCase().includes(filterText.toLowerCase()) ||
      todo.description.toLowerCase().includes(filterText.toLowerCase())
    );
  };

  return (
    <div>
      <CreateTodo />
      <input
        type="text"
        placeholder="Search Todos"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}/>
      <Todos todos={filterTodos(todos, filterText)} />
    </div>
  );
}

export default App
