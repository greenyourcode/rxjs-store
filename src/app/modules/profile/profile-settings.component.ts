import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss']
})
export class ProfileSettingsComponent implements OnInit {
  @Input() initialValue: any;
  @Input() parentForm: FormGroup;
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    if (this.form === undefined) {
      this.form = this.fb.group({
        privateProfile: this.initialValue ? this.initialValue.privateProfile : '',
        themeColor: this.initialValue ? this.initialValue.themeColor : ''
      });
    }
    if (this.parentForm) {
      this.parentForm.addControl('details', this.form);
    }
  }

}
