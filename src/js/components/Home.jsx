import React, { useState } from "react";


const Home = () => {

	const [inputValue, setInputValue] = useState("")
	const [tareas, setTareas] = useState([])

	function newTask(e) {
		e.preventDefault()
		setTareas([...tareas, inputValue])
		setInputValue("")
	}


	
	return (
		<div>
			<h1>MIS QUE HACERES</h1>
			<form onSubmit={(e) => newTask(e)}>
				<input placeholder="QUE TENGO QUE HACER" value={inputValue} onChange={(e) => setInputValue(e.target.value)}>
				</input>
			</form>
			<ul>
				<li>Sacar al perro<i className="fa-solid fa-trash-can"></i></li>
				<li>Hacer la comida<i className="fa-solid fa-trash-can"></i></li>
				<li>Tender la ropa<i className="fa-solid fa-trash-can"></i></li>
				{tareas.map((tarea) => (
					<li>{tarea} <i className="fa-solid fa-trash-can"></i></li>
				))}
			</ul>
		</div>
	);
};

export default Home;