import { ProfileSettingsState } from './profile.state';
import { StoreService } from './../../core/store.service';
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
    public fb: FormBuilder,
    public profileStore: ProfileStore) { }

  ngOnInit() {
    if (this.form === undefined) {
      this.form = this.fb.group({});
    }
    this.form.valueChanges
      .subscribe(data => {
        if (data) {
          this.profileStore.dispatch(data);
        }
      });
  }

  onLoad(settings: ProfileSettingsState) {
    this.profileStore.setState({
      ...this.profileStore.state,
      settings
    });
  }

  onValidation(settingsValues) {
    // const {themeColor, privateProfile} = settingsValues;
    // this.data.settings.themeColor = themeColor;
    // this.data.settings.privateProfile = privateProfile;
    console.log('appel du web service de modification', this.profileStore.state);
  }
}
