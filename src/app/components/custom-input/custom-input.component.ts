import { Component, forwardRef, HostBinding, ViewChild, ElementRef, OnInit, Input } from '@angular/core';
import { FormBuilder, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, Validator, Validators, AbstractControl, NgModel, FormControl } from '@angular/forms';

@Component({
    selector: 'custom-input',
    templateUrl: './custom-input.component.html',
    styles: ['.errorMsg { margin-left: 5px; background-color:red;'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CustomInputComponent),
            multi: true
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => CustomInputComponent),
            multi: true
        }
    ]
})
export class CustomInputComponent implements ControlValueAccessor, Validator, OnInit {
    private _internalValidationEnabled: boolean = true;
    private textPattern: string = '[a-zA-Z]+';

    ngOnInit() {
    }

    controlValue = new FormControl();

    @Input() set disabled(val) {
        if (val === "" || val !== 'false' || val !== false) {
            this.controlValue.disable();
        }
    }

    @Input() set internalValidation(val) {
        this._internalValidationEnabled = val;
        
        this.controlValue.clearValidators();
        if (!!this._internalValidationEnabled) {
            this.controlValue.setValidators(Validators.pattern(this.textPattern))
        }
        this.controlValue.updateValueAndValidity();
        this.onChange(this.controlValue.value);
    }

    get internalValidation() {
        return this._internalValidationEnabled;
    }

    @Input() set value(val) {
        if (val) {
            this.controlValue.setValue(val);
        }
    }

    onFocus() {
        this.onTouched();
    }

    //--------------- IMPLEMENTING CUSTOM VALIDATION ------------------------------//
    // ----------------------------------------------------------------------------//

    validate(c: AbstractControl) {
        if (!this.internalValidation) {
            return null;
        }
        return this.controlValue.errors;
    }
    //.............................................................................//
    // ----------------------------------------------------------------------------//


    //---------------CONTROL VALUE ACCESSOR IMPLEMENTATION--------------------------//
    // ----------------------------------------------------------------------------//

    onChange = (_) => { };
    onTouched = () => { };

    writeValue(val: string): void {
        if (val) {
            this.value = val;
            this.controlValue.setValue(val);
        }
    }
    registerOnChange(fn: any): void {
        this.onChange = fn;
    }
    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    // ----------------------------------------------------------------------------//
    //-----------------------------------------------------------------------------//

}

// @Component({
//     selector: 'custom-input-2',
//     templateUrl: './forms.component.html',
//     styles: ['.errorMsg { margin-left: 5px; background-color:red;'],
// })
// export class CustomInputComponent2{
//     private _value = "";
//     get value() {
//         return this._value;
//     }
//     set value(val) {
//         this._value = val;
//     }


//     onInput(event) {
//         this.value = event.target.value;
//     }

// }