import { Component, forwardRef, HostBinding, ViewChild, ElementRef, OnInit, Input } from '@angular/core';
import { FormBuilder, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, Validator, AbstractControl, NgModel, FormControl } from '@angular/forms';

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
export class CustomInputComponent implements ControlValueAccessor, Validator, OnInit{
    ngOnInit(){
        this.controlValue.valueChanges.subscribe((val) => {
            this.value = val;
        });
    }


    // @ViewChild("model") controlModel: NgModel;
    @ViewChild('text') textbox: ElementRef;

    controlValue = new FormControl();
    // @HostBinding('attr.required') get pattern() {
    //     if(this.internalValidation){
    //         return ''
    //     }
    //     return null;
    // }
    @Input() internalValidation = true;
    validate(c: AbstractControl) {
        // console.log(this.controlValue);
        // console.log('validate called', c);
        if(!this.internalValidation){
            return null;
        }
        return this.controlValue.errors;
    }

    private _value = "";
    get value() {
        return this._value;
    }
    set value(val) {
        this._value = val;
        this.onChange(val);
    }

    get textPattern(){
        if(this.internalValidation) return '[a-zA-Z]+';
        else return null;
    }


    onChange;
    onTouched;
    disabled: Boolean;
    writeValue(val: string): void {
        if(val){
            this.value = val;
        }
        console.log('value changed', val);
    }
    registerOnChange(fn: any): void {
        this.onChange = fn;
    }
    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }
    onFocus() {
        this.onTouched();
    }

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