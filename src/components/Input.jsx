const Input = ({setTodo, todo, addTodo}) => {
	return (
		<div className="input-wrapper">
			<input
				className="input"
				type="text"
				name="todo"
				placeholder="Create a todo"
				onChange={(event) => setTodo(event.target.value)}
                value={todo}
			/>
            <button className="add-button" onClick={addTodo}>Add</button>
		</div>
	);
};

export default Input;
