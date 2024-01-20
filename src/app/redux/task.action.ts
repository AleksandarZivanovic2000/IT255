import { createAction, props } from "@ngrx/store";


export const addTask = createAction('[Task] Dodaj task', props<{ task: string}>());
export const removeTask = createAction('[Task] Obrisi task', props<{index: number}>());