import { state } from '@angular/animations';
import { Action, createReducer, on } from '@ngrx/store';
import { AddItem, ChangeItemState, EditItemNote, InitializeSuccess, RemoveItem } from './todo-list.actions';
import { initialState, TodoListState } from './todo-list.state';

const reducer = createReducer(
  initialState,

  on(InitializeSuccess, (state, { savedItems }) => ({
    ...state,
    items: savedItems
  })),

  on(AddItem, (state, { item }) => ({
    ...state,
    items: [...state.items, item]
  })),

  on(ChangeItemState, (state, { item, isCompleted }) => {
    const updatedItem = { ...item, isCompleted };
    const newItems = [...state.items];
    const itemIndex = newItems.indexOf(item);
    newItems.splice(itemIndex, 1, updatedItem);

    return {
      ...state,
      items: newItems
    };
  }),

  on(RemoveItem, (state, { item }) => {
    const newItems = [...state.items]
    const itemToRemove = newItems.indexOf(item);
    newItems.splice(itemToRemove, 1);

    return {
      ...state,
      items: newItems
    };
  }),

  on(EditItemNote, (state, { item, notes }) => {
    const updatedItem = { ...item, notes };
    const newItems = [...state.items];
    const itemIndex = newItems.indexOf(item);
    newItems.splice(itemIndex, 1, updatedItem);

    return {
      ...state,
      items: newItems
    };
  })
);


export function todoReducer(state = initialState, action: Action): TodoListState {
  return reducer(state, action);
}
