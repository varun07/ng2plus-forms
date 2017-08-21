import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-demo-component',
  templateUrl: './template-driven-demo-component.component.html',
  styleUrls: ['./template-driven-demo-component.component.css']
})
export class TemplateDrivenDemoComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  completeForm(formValues){
    console.log(formValues);
    console.log(formValues.controls['name'])
    // console.log(formValues.value);
  }

}
