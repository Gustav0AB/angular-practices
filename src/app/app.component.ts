import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo/components/todo-list/todo-list.component';
import { FakeshopComponent } from './fakeShop/components/fakeshop/fakeshop.component'
import { DisplayUsersComponent } from './usersManager/components/display-users/display-users.component';
import { AddUserComponent } from './usersManager/components/add-user/add-user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, TodoListComponent, FakeshopComponent, DisplayUsersComponent,AddUserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  apiToken: string = '';

  dumbData: Array<{}> = [];

  names = ['Sofía', 'Valentina', 'Regina', 'María José', 'María Fernanda', 'Santiago', 'Mateo', 'Sebastián', 'Leonardo', 'Emiliano', 'Alexander'];
  lastname = ['Hernández','García','Martínez ','González ','López','Sánchez ','Rodríguez ','Ortiz','Álvarez','Chávez','Castillo'];
  status = ['Active','Duedate','Duedate Soon'];

  addYourToken(tokenValue: string)  {
    this.apiToken = tokenValue;
  }

  generate(){
    let numbOfElms = 20, i = 1;
    while(i< numbOfElms){
      let day = Math.floor(Math.random() * 20), 
      month= Math.floor(Math.random() * 12), 
      date = `${day < 10? '0' + day: day}-${month < 10? '0' + month: month}-2024`;

      this.dumbData.push({
        "id": i,
        "name":this.names[Math.floor(Math.random() * this.names.length)],
        "lastname":this.lastname[Math.floor(Math.random() * this.lastname.length)],
        "birthday":'',
        "service":'Gym',
        "image":'',
        "amount": 500,
        "duedate":date,
        "status": this.status[Math.floor(Math.random() * this.status.length)]
      });

      i++;
    }
    console.log(this.dumbData)
  }
}

