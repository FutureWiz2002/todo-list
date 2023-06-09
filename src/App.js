import React, {useState, useEffect } from 'react';
import "./App.css";
// Importing components
import Form from "./components/form"
import Todolist from './components/todolist';

function App() {
  const [inputText, setInputText] = useState(""); // To empty the form once a task is entered
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [fliteredtodos, setFilteredtodos] = useState([]);

  useEffect(() => {
    filterHandler();
  }, [todos, status])


  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilteredtodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredtodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredtodos(todos)
        break;
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Jabir's to do list</h1>
      </header>
      <Form
        setTodos={setTodos} 
        todos = {todos} 
        setInputText={setInputText} 
        inputText={inputText} 
        setStatus={setStatus}  />
      <Todolist 
        todos={todos} 
        setTodos={setTodos} 
        fliteredtodos={fliteredtodos}/>
    </div>
  );

}
export default App;