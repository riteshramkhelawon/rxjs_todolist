import { createAction, props } from '@ngrx/store';
import { TodoItem } from './todo-item';

export const Initialize = createAction('[TODO] Initialize');
export const InitializeSuccess = createAction('[TODO] Initialize Success', props<{ savedItems: TodoItem[] }>());

export const AddItem = createAction('[TODO] Add Item', props<{ item: TodoItem }>());
export const ChangeItemState = createAction('[TODO] Change Item Item', props<{ item: TodoItem, isCompleted: boolean }>());
export const RemoveItem = createAction('[TODO] Remove Item', props<{ item: TodoItem }>());
export const EditItemNote = createAction('[TODO] Edit Item Note', props<{ item: TodoItem, notes: string }>());
