import {useState} from 'react'
import ToDo from './ToDo';
import ToDoForm from './ToDoForm';

function App() {
  const [todos, setTodos] = useState ( [] )

  const addTask = (userInput) => {
    if(userInput) {
      const newItem= {
        id:Math.random().toString(36).substr(2,9),
        task: userInput,
        complite: false
      }
      setTodos([...todos,newItem])
    }
  }

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  const handelToggle = (id) => {
    setTodos ([
      ...todos.map((todo) => 
      todo.id === id ? {...todo, complite: !todo.complite} : {...todo}
      )
    ])
  }
  return (
    <div className="App">
      <header>
        <h1>Список задач : {todos.length}</h1>
      </header>
      <ToDoForm addTask={addTask}/>
      {todos.map((todo)=> {
      return (
        <ToDo
        todo={todo}
         key = {todos.id}
         toggleTask= {handelToggle}
         removeTask= {removeTask}
         />
      )
})}
    </div>
  );
}

export default App;
