import { Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator } from '@angular/forms'

export class MatchValidator {
  static matchValidatorFn(c: FormControl) {
    return c.value === 'Varun' ? { 'match': {value: c.value}}: null;
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


