import {FormControl} from '@angular/forms';
import {FormControlName} from './form-control-name';

export type FormControlNameType = Record<FormControlName, unknown>

export interface AddressForm extends FormControlNameType {
  [FormControlName.POSTAL_CODE]: FormControl<string>;
  [FormControlName.CITY]: FormControl<string>;
  [FormControlName.STREET]: FormControl<string>;
  [FormControlName.STREET_NUMBER]: FormControl<string>;
}
