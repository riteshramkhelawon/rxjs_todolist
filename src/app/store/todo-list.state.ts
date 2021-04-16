import { TodoItem } from './todo-item';

export interface TodoListState {
  items: TodoItem[];
}

export const initialState: TodoListState = {
  items: []
};

