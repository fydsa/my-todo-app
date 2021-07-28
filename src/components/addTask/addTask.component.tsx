import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/task/task.actions';
import { v1 as uuid } from 'uuid';

const AddTask: React.FC = () => {
	const [title, setTitle] = useState<string | number>('');
	const dispatch = useDispatch();

	const addEnteredTask = () => {
		const params = {
			id: uuid(),
			title: title,
			isCompleted: false,
		};
		dispatch(addTask(params));
	};

	return (
		<>
			<input
				value={title}
				type='text'
				placeholder='Please enter your task'
				onChange={(e) => setTitle(e.target.value)}
			/>
			<button onClick={addEnteredTask}>Add</button>
		</>
	);
};

export default AddTask;
