import { TaskActionTypes } from './task.types';

export const addTask = (task: { [key: string]: unknown }) => ({
	type: TaskActionTypes.ADD_TASK,
	payload: task,
});

export const editTask = (task: { [key: string]: unknown }) => ({
	type: TaskActionTypes.EDIT_TASK,
	payload: task,
});

export const removeTask = (task: { [key: string]: unknown }) => ({
	type: TaskActionTypes.REMOVE_TASK,
	payload: task,
});

export const completeTask = (task: { [key: string]: unknown }) => ({
	type: TaskActionTypes.COMPLETE_TASK,
	payload: task,
});

export const sortTask = (task: { [key: string]: unknown }) => ({
	type: TaskActionTypes.SORT_TASK,
	payload: task,
});
