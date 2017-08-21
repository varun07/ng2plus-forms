import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-custom-form-control',
  templateUrl: './custom-form-control.component.html',
  styleUrls: ['./custom-form-control.component.css']
})
export class CustomFormControlComponent implements OnInit {

  modelValue: string = "varun1";
  modelValue1 = "varun2";

  constructor() { }

  ngOnInit() {
  }

  currentInternalValidation = true;
  buttonClick() {
    this.currentInternalValidation = !this.currentInternalValidation;
  }
  
  currentInternalValidation1 = null;
  buttonClick1() {
    this.currentInternalValidation1 = !this.currentInternalValidation1;
  }

  customForm = new FormBuilder().group({
    myCustomInput: ''
  })
}
