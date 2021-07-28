import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { AnyAction } from 'redux';

import { tasks } from '../../constants/tasks.constant';
import { Action } from './task.models';
import { TaskActionTypes } from './task.types';

interface RootState {
	tasks: Array<{
		id: number | string;
		title: string;
		isCompleted: boolean;
	}>;
}

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

const TaskReducer = (state = tasks, action: AnyAction | Action) => {
	let new_state = [...state];
	switch (action.type) {
		case TaskActionTypes.ADD_TASK:
			new_state = [...new_state, action.payload];
			return new_state;
		default:
			return state;
	}
};

export default TaskReducer;
