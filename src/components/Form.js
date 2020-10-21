import React from 'react';

const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {

	const inputTextHandler = (event) => {
		event.preventDefault();
		//console.log(event.target.value);
		setInputText(event.target.value);
	}

	const submitTodoHandler = (event) => {
		event.preventDefault();
		setTodos([
			...todos,
			{ text: inputText, completed: false, id: Math.random()*100 },
		]);
		//console.log(todos);
		setInputText('');
	}

	const statusHandler = (event) => {
		event.preventDefault();
		setStatus(event.target.value);
	}

	return (
		<form>
			<input value = {inputText} 
				   onChange = {inputTextHandler} 
				   type = "text" 
				   className = "todo-input"/>
			<button onClick = {submitTodoHandler} className = "todo-submit" type = "submit">
				<i className = "fas fa-plus-square"></i>
			</button>
			<div className = "select">
				<select onChange = {statusHandler} name = "todos" className = "filter-todo">
					<option value = "all">All</option>
					<option value = "checked">Checked</option>
					<option value = "unchecked">Unchecked</option>
				</select>
			</div>
		</form>
	);
}

export default Form;