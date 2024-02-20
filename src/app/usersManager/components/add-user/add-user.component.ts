import { JsonPipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [NgFor, ReactiveFormsModule, JsonPipe, FormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {
  
  serviceValue = '';

  constructor(private formBuilder: FormBuilder) {}

  userForm = this.formBuilder.group({
    name: ['', Validators.required],
    lastName: [''],
    phoneNumber: [''],
    birthday: [''],
    image: [''],
    services: this.formBuilder.array([this.formBuilder.control('')]),
  });

  get services() {
    return this.userForm.get('services') as FormArray;
  }
  
  addService(value: string) {
    this.services.push(value);
  }

  onSubmit(){
    console.log(this.userForm.value);
  }
}
