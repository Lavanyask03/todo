import React from 'react';
import Todo from './Todo';

const TodoList = ({ setTodos, todos, filteredTodos }) => {
	return (
		<div className = "todo-container">
			<ul className = "todo-list">
				{ filteredTodos.map(todoItem => (
					<Todo key = {todoItem.id} 
						  setTodos = {setTodos}
						  todos = {todos}
						  todoItem = {todoItem}
						  text = {todoItem.text} 
					/>
				))}
			</ul>
		</div>
	);
}

export default TodoList;