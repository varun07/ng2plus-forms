import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-model-driven-demo-component',
  templateUrl: './model-driven-demo-component.component.html',
  styleUrls: ['./model-driven-demo-component.component.css']
})
export class ModelDrivenDemoComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  completeForm1(formValues){
    console.log(formValues);
    console.log(formValues.get('name').value)
    // console.log(formValues.value);
  }

  registerForm = new FormBuilder().group({
    name: new FormBuilder().group({
      firstname: [''],
      lastname: ''
    }),
    state: '',
    street: '',
    zip: '',
    city: ''
  });

  registerForm2 = new FormGroup({
    name: new FormGroup({
      firstname: new FormControl(),
      lastname: new FormControl()
    }),
    street: new FormControl(),
    zip: new FormControl(),
    city: new FormControl()
  });

   states = ['Bihar', 'Jharkhand', 'UP', 'Delhi']

}
