import { Routes } from '@angular/router';
import { HomepageComponent } from './utils/components/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';
import { TodoListComponent } from './pages/todo/components/todo-list/todo-list.component';
import { DisplayUsersComponent } from './pages/usersManager/components/display-users/display-users.component';
import { FakeshopComponent } from './pages/fakeShop/components/fakeshop/fakeshop.component';
import { AddUserComponent } from './pages/usersManager/components/add-user/add-user.component';

export const routes: Routes = [
    { path:'', redirectTo:'/home', pathMatch: 'full' },
    { path:'home', component: HomepageComponent },
    { path:'practices/todo', component: TodoListComponent },
    { path:'practices/fakeshop', component: FakeshopComponent },
    { path:'user-manager', component: DisplayUsersComponent },
    { path:'add-user', component: AddUserComponent },
    { path:'login', component: LoginComponent }
];
