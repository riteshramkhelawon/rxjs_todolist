import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TodoItem } from '../store/todo-item';
import { AddItem, Initialize } from '../store/todo-list.actions';
import { todoItems } from '../store/todo-list.selectors';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  items$: Observable<TodoItem[]>;

  newItemText = '';
  newItemNotes = '';

  constructor(private store: Store) {
    this.items$ = store.pipe(select(todoItems));
  }

  ngOnInit(): void {
    this.store.dispatch(Initialize());
  }

  onAddItem(): void {
    this.store.dispatch(AddItem({ item: { isCompleted: false, description: this.newItemText, notes: this.newItemNotes } }));
    this.newItemText = '';
    this.newItemNotes = '';
  }
}
