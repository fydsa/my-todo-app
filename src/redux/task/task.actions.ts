import { TaskActionTypes } from "./task.types";

export const addTask = (task: object) => ({
  type: TaskActionTypes.ADD_TASK,
  payload: task,
});

export const editTask = (task: object) => ({
  type: TaskActionTypes.EDIT_TASK,
  payload: task,
});

export const removeTask = (task: object) => ({
  type: TaskActionTypes.REMOVE_TASK,
  payload: task,
});

export const completeTask = (task: object) => ({
  type: TaskActionTypes.COMPLETE_TASK,
  payload: task,
});

export const sortTask = (task: object) => ({
  type: TaskActionTypes.SORT_TASK,
  payload: task,
});
