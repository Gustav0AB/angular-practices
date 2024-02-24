import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ItemComponent } from '../item/item.component';
import { Todo } from '../../test-data/data';
import { Item } from '../../interfaces/interfaces';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  title = "todo";

  filter: "all" | "active" | "done" = "all";

  allItems = new Array<Item>;

  get tasks() {
    if (this.filter === "all") {
      return this.allItems;
    }
    return this.allItems.filter((item) =>
      this.filter === "done" ? item.done : !item.done
    );
  }

  addItem(description: string) {
    this.allItems.unshift({
      description,
      done: false
    });
  }

  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
}
