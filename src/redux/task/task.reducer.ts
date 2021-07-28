import { TypedUseSelectorHook, useSelector } from "react-redux";
import { AnyAction } from "redux";

import { tasks } from "../../constants/tasks.constant";
import { Action } from "./task.models";
import { TaskActionTypes } from "./task.types";

interface RootState {
  tasks: Array<{
    id: number | string;
    title: string;
    isCompleted: boolean;
  }>;
}

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

const TaskReducer = (state = tasks, action: AnyAction | Action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default TaskReducer;
