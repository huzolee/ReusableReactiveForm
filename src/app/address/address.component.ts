import {Component, OnDestroy, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';
import {AddressForm} from './address-form';
import {FormControlName} from './form-control-name';
import {Address} from './address';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-address',
    templateUrl: './address.component.html',
    styleUrls: ['./address.component.scss'],
    providers: [{provide: NG_VALUE_ACCESSOR, useExisting: AddressComponent, multi: true}]
})
export class AddressComponent implements OnInit, ControlValueAccessor, OnDestroy {
    public form!: FormGroup<AddressForm>;
    public FormControlName = FormControlName;
    public onTouched = () => {
    };
    public onChangeSubscription: Subscription = new Subscription();

    constructor() {
    }

    ngOnInit(): void {
        this.form = new FormGroup<AddressForm>({
            [FormControlName.POSTAL_CODE]: new FormControl<string>('', {nonNullable: true}),
            [FormControlName.CITY]: new FormControl<string>('', {nonNullable: true}),
            [FormControlName.STREET]: new FormControl<string>('', {nonNullable: true}),
            [FormControlName.STREET_NUMBER]: new FormControl<string>('', {nonNullable: true}),
        });
    }

    writeValue(value: Address): void {
        if (value) {
            this.form.patchValue(value);
        }
    }

    registerOnChange(onChangeFn: any): void {
        this.onChangeSubscription.add(this.form.valueChanges.subscribe(onChangeFn));
    }

    registerOnTouched(onTouchedFn: any): void {
        this.onTouched = onTouchedFn;
    }

    ngOnDestroy(): void {
        this.onChangeSubscription.unsubscribe();
    }
}
