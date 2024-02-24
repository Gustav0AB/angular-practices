import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../utils/services/auth/login.service'
import { LoginRequest } from '../../utils/interfaces/auth/interface';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private formBuilder: FormBuilder, 
                private loginService: LoginService) {}

  loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['']
  });

  onSubmit(){
    this.loginService.loginRequest(this.loginForm.value as LoginRequest);
  }
}
