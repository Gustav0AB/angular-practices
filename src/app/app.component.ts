import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo/components/todo-list/todo-list.component';
import { FakeshopComponent } from './fakeShop/components/fakeshop/fakeshop.component'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, TodoListComponent, FakeshopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  
}

