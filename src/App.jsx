import './App.css';
import { useState } from 'react';

function App() {
	const [todo, setTodo] = useState('');
	const [todos, setTodos] = useState([1,2,3,4]);

	return (
		<div className="App">
      <img className="logo" src="/logo.png" alt="Techover" />
			<ul>
				{todos.map((todo, i) => (
					<li key={i}></li>
				))}
			</ul>
		</div>
	);
}

export default App;
