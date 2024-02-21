import { JsonPipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { testServices } from '../../test/data';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [NgFor, ReactiveFormsModule, JsonPipe, FormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {
  
  constructor(private formBuilder: FormBuilder) {}

  serviceTest = testServices;

  userForm = this.formBuilder.group({
    name: ['', Validators.required],
    lastName: [''],
    phoneNumber: [''],
    birthday: [''],
    image: [''],
    services: this.formBuilder.array([]),
  });

  get services() {
    return this.userForm.get('services') as FormArray;
  }
  
  addService() {
    const servicesFormGroup = this.formBuilder.group({
      name: '',
      amount:  ''
    });

    //add this.formBuilder.control('') just to add 1 input element
    this.services.push(servicesFormGroup);
  }

  removeService(index: number){

  }

  onSubmit(){
    console.log(this.userForm.value);
  }
}
