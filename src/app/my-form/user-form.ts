import {FormControlName} from './form-control-name';
import {FormControl} from '@angular/forms';
import {AddressFromGroup} from '../address/address-from-group';

export type FormControlNameType = Record<FormControlName, unknown>

export interface UserForm extends FormControlNameType {
    [FormControlName.USERNAME]: FormControl<string>;
    [FormControlName.PASSWORD]: FormControl<string>;
    [FormControlName.ADDRESS]: AddressFromGroup;
}
