import { Action } from './task.models'
import { TaskActionTypes } from './task.types'
import { AnyAction } from 'redux'
import { useSelector, TypedUseSelectorHook } from 'react-redux'
import { tasks } from '../../constants/tasks.constant'

interface RootState {
    tasks: Array<{
        id: number | string,
        title: string,
        isCompleted: boolean
    }>
}

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

const TaskReducer = (state = tasks, action: AnyAction | Action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default TaskReducer

