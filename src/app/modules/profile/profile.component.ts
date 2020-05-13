import { ProfileSettingsState } from './profile.state';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProfileStore } from './profile.store';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  form: FormGroup;
  mock = {
    name: 'toto',
    id: '1',
    settings: {
      themeColor: 'orange',
      privateProfile: 'false'
    }
  };

  constructor(
    public fb: FormBuilder,
    public profileStore: ProfileStore,
    public cd: ChangeDetectorRef) { }

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

  onValidation() {
    const formValueThemeColor = this.form.get('settings.themeColor').value;
    const formValuePrivateProfile = this.form.get('settings.privateProfile').value;
    this.mock.settings.themeColor = formValueThemeColor;
    this.mock.settings.privateProfile = formValuePrivateProfile;
    console.log('appel du web service de modification', this.profileStore.state);
  }
}
