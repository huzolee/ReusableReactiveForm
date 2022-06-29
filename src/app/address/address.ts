import {FormControlName} from './form-control-name';

export type FormControlNameType = Record<FormControlName, unknown>

export interface Address extends FormControlNameType {
  [FormControlName.POSTAL_CODE]: string;
  [FormControlName.CITY]: string;
  [FormControlName.STREET]: string;
  [FormControlName.STREET_NUMBER]: string;
}
