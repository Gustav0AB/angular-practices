import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from '@angular/common';
import { Item } from "../../interfaces/interfaces";

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {

  editable = false;

  @Input() item!: Item;
  @Output() remove = new EventEmitter<Item>();

  markasdone(event: any){
    this.item.done = !this.item.done
    if(event.target.nextElementSibling.classList != 'done-tasks')
      document.getElementById(`${event.target.id}`)?.nextElementSibling?.classList.add('done-tasks');
    else 
      document.getElementById(`${event.target.id}`)?.nextElementSibling?.classList.remove('done-tasks');
  }
  saveItem(description: string) {
    if (!description) return;
    this.editable = false;
    this.item.description = description;
  } 
}