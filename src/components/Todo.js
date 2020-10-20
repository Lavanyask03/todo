import React from 'react';

const Todo = ({ text, todoItem, setTodos, todos }) => {

	const deleteHandler = () => {
		console.log(todoItem)
		setTodos(todos.filter((elem) => elem.id !== todoItem.id));
	}

	const checkHandler = () => {
		console.log(todoItem)
		setTodos(todos.map((elem) => {
			if (elem.id === todoItem.id) {
				return {
					...elem, completed: !todoItem.completed
				}
			}
			return elem;
		}));
	}

	return (
		<div className = 'todo'>
			<li className = {`todoItem ${ todoItem.completed ? "check" : ""}`}> {text} </li>
			<button onClick = {checkHandler} className = 'check-btn'>
				<i className = 'fas fa-check'> </i> 
			</button>
			<button onClick = {deleteHandler} className = 'trash-btn'>
				<i className = 'fas fa-trash'> </i> 
			</button>
		</div>
	);
}

export default Todo;