import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoListState } from './todo-list.state';

export const todoState = createFeatureSelector<TodoListState>('TodoList');

export const todoItems = createSelector(todoState, s => s.items);
