import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { users } from '../../test/data';
import { User } from '../../interfaces/interfaces'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-display-users',
  standalone: true,
  imports: [CommonModule, FormsModule ],
  templateUrl: './display-users.component.html',
  styleUrl: './display-users.component.scss'
})
export class DisplayUsersComponent {
  tableHeaders: Array<String> = ['Nombre', 'Apellido', 'Servicio', 'Monto', 'Fecha Vencimiento','Status', 'Optiones'];
  userSearchKey= "";

  dataUsers: User[] = users;

  filterUsers = this.dataUsers;
  
  filter = "all" ;

  userFilter() {
    if (this.filter === "all") {
      this.filterUsers = this.dataUsers.filter(user => user.name.toLowerCase().includes(this.userSearchKey));
    }else
      this.filterUsers = this.dataUsers.filter(user => user.status.toLowerCase().includes(this.filter));

  }

  userSearch(){
    this.filterUsers = this.dataUsers.filter(user => user.name.toLowerCase().includes(this.userSearchKey));
  }

  userPayment(user: User){
    console.log(user)
  }
}
