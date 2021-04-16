import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { AddItem, ChangeItemState, Initialize, InitializeSuccess, RemoveItem } from './todo-list.actions';
import { todoItems } from './todo-list.selectors';

@Injectable()
export class TodoListEffects {
  debug$ = createEffect(() => this.actions$.pipe(tap(a => console.log(a.type, a))), { dispatch: false });

  loadList$ = createEffect(() => this.actions$.pipe(
    ofType(Initialize),
    map(() => {
      const savedItems = JSON.parse(localStorage.getItem('todoListItems') || '[]');
      return InitializeSuccess({ savedItems });
    })));

  saveList$ = createEffect(() => this.actions$.pipe(
    ofType(AddItem, ChangeItemState, RemoveItem),
    switchMap(a => this.store$.pipe(select(todoItems), take(1))),
    tap(items => localStorage.setItem('todoListItems', JSON.stringify(items)))
  ), { dispatch: false });

  constructor(private actions$: Actions, private store$: Store) {
  }
}
