import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoItem } from '../store/todo-item';
import { ChangeItemState, EditItemNote, RemoveItem } from '../store/todo-list.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  private _item: TodoItem | null = null;

  constructor(private store: Store) { }
  @Input() taskNumber: number = 0;
  editedNote: string = (this._item) ? this._item.notes : 'note';

  @Input()
  get item(): TodoItem {
    if (this._item === null) {
      throw new Error('Item is not assigned');
    }

    return this._item;
  }
  set item(newValue: TodoItem) { this._item = newValue; }

  ngOnInit(): void {
  }

  onCheckboxToggled(): void {
    this.store.dispatch(ChangeItemState({ item: this.item, isCompleted: !this.item.isCompleted }));
  }

  onRemoveTask(): void {
    // alert('Are you sure you want to delete this task?');
    this.store.dispatch(RemoveItem({ item: this.item }));
  }

  onEditNote(): void {
    console.log('new note: '+ this.editedNote);
    this.store.dispatch(EditItemNote({ item: this.item, notes: this.editedNote }))
  }
}
