import { Component, Directive, forwardRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NG_VALIDATORS, Validator, ValidationErrors, AbstractControl } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _model;
  @ViewChild('model') set model(val){
    window['customModel'] = val;
    this._model = val;
  }
  currentInternalValidation = null;
  currentInternalValidation1 = null;

  
    buttonClick() {
        this.currentInternalValidation = !this.currentInternalValidation;
    }

    buttonClick1() {
        this.currentInternalValidation1 = !this.currentInternalValidation1;
    }


  get model() {
    return this._model;
  }
  title = 'app';

  states = ['Bihar', 'Jharkhand', 'UP', 'Delhi']

  customForm = new FormBuilder().group({
        myCustomInput: ''
    })

  completeForm(formValues){
    console.log(formValues);
    console.log(formValues.controls['name'])
    // console.log(formValues.value);
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

  myMatch = new FormControl('', [MatchValidator.matchValidatorFn]);

  modelValue: string;

  constructor(){
    this.modelValue = "varun";
  }

}

@Directive({
  selector: 'input[match]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MatchDirective,
      multi: true
    }
  ]
})
export class MatchDirective implements Validator {
  validate(c: FormControl): {[key: string]: any}{
    return MatchValidator.matchValidatorFn(c);
  }
}

class MatchValidator {
  static matchValidatorFn(c: FormControl) {
    return c.value === 'Varun' ? { 'match': {value: c.value}}: null;
  }
}
