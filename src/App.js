import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  const [ inputText, setInputText] = useState("");
  const [ todos, setTodos] = useState([]);
  const [ status, setStatus] = useState("all");
  const [ filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  },[]);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  },[todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "checked": setFilteredTodos(todos.filter(todo => todo.completed === true));
                      break;
      case "unchecked": setFilteredTodos(todos.filter(todo => todo.completed === false));
                      break;
      default: setFilteredTodos(todos);
                      break;
    }
  }

  const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
  }

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null ) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todosLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todosLocal);
    }
  }

  return (
    <div className="App">
      <header> 
        <h1> TODO list! </h1>
      </header>
      <Form setInputText = {setInputText} 
            inputText = {inputText}
            todos = {todos} 
            setTodos = {setTodos} 
            setStatus = {setStatus}
      />
      <TodoList setTodos = {setTodos}
                todos = {todos} 
                filteredTodos = {filteredTodos}
      />
    </div>
  );
}

export default App;
