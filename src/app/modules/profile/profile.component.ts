import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProfileStore } from './profile.store';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  form: FormGroup;

  data = {
    name: 'toto',
    id: '1',
    settings: {
      privateProfile: false,
      themeColor: 'blue'
    }
  };

  constructor(
    public fb: FormBuilder) { }

  ngOnInit() {
    if (this.form === undefined) {
      this.form = this.fb.group({});
    }
    this.form.valueChanges
      .subscribe(data => {
        if (data) {
          console.log(data);
        }
      });
  }

  onValidation(settingsValues) {
    const {themeColor, privateProfile} = settingsValues;
    this.data.settings.themeColor = themeColor;
    this.data.settings.privateProfile = privateProfile;
  }
}
