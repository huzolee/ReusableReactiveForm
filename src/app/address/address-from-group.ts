import {
  AbstractControlOptions,
  AsyncValidatorFn,
  FormControl,
  FormGroup,
  ValidatorFn
} from '@angular/forms';
import {FormControlName} from './form-control-name';
import {AddressForm} from './address-form';

export class AddressFromGroup extends FormGroup<AddressForm> {
  constructor(validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null,
              asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null) {
    super({
      [FormControlName.POSTAL_CODE]: new FormControl<string>('', {nonNullable: true}),
      [FormControlName.CITY]: new FormControl<string>('', {nonNullable: true}),
      [FormControlName.STREET]: new FormControl<string>('', {nonNullable: true}),
      [FormControlName.STREET_NUMBER]: new FormControl<string>('', {nonNullable: true})
    }, validatorOrOpts, asyncValidator);
  }
}
