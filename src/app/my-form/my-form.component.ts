import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {UserForm} from './user-form';
import {FormControlName} from './form-control-name';
import {AddressFromGroup} from '../address/address-from-group';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss']
})
export class MyFormComponent implements OnInit {

  public form!: FormGroup<UserForm>;
  public FormControlName = FormControlName;

  constructor() {
  }

  ngOnInit(): void {
    this.form = new FormGroup<UserForm>({
      [FormControlName.USERNAME]: new FormControl('', {nonNullable: true}),
      [FormControlName.PASSWORD]: new FormControl('', {nonNullable: true}),
      [FormControlName.ADDRESS]: new AddressFromGroup()
    });
  }

  public send(): void {
    console.log('form raw value', this.form.getRawValue());
  }
}
