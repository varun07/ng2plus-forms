import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-custom-form-control',
  templateUrl: './custom-form-control.component.html',
  styleUrls: ['./custom-form-control.component.css']
})
export class CustomFormControlComponent implements OnInit {

  modelValue: string;

  constructor() {
    this.modelValue = "varun";
  }

  ngOnInit() {
  }

  currentInternalValidation = null;
  currentInternalValidation1 = null;


  buttonClick() {
    this.currentInternalValidation = !this.currentInternalValidation;
  }

  buttonClick1() {
    this.currentInternalValidation1 = !this.currentInternalValidation1;
  }

  title = 'app';

  states = ['Bihar', 'Jharkhand', 'UP', 'Delhi']

  customForm = new FormBuilder().group({
    myCustomInput: ''
  })




  registerForm2 = new FormGroup({
    name: new FormGroup({
      firstname: new FormControl(),
      lastname: new FormControl()
    }),
    street: new FormControl(),
    zip: new FormControl(),
    city: new FormControl()
  });




}
