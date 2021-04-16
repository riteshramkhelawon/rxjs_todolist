import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { TodoListEffects } from './store/todo-list.effects';
import { todoReducer } from './store/todo-list.reducer';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot(),
    StoreModule.forFeature('TodoList', todoReducer),
    EffectsModule.forFeature([TodoListEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
