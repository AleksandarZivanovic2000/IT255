import { createReducer, on } from "@ngrx/store";
import * as taskAction from './task.action';
import { TaskState } from './task.state'

export const initialState: TaskState = {
    tasks: [],
};

export const taskReducer = createReducer(
    initialState,
    on(taskAction.addTask, (state, { task }) => ({ ...state, tasks: [...state.tasks, task] })),
    on(taskAction.removeTask, (state, { index }) => ({ ...state, tasks: state.tasks.filter((_, i) => i !== index) }))
)