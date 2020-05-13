import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileSettingsComponent implements OnInit, OnChanges {
  @Input() initialValue: any;
  @Input() parentForm: FormGroup;
  @Output() validateAction = new EventEmitter();
  @Output() loadingAction = new EventEmitter();
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
      this.parentForm.addControl('settings', this.form);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    const { initialValue } = changes;
    if (initialValue.currentValue) {
      if (this.form && changes.initialValue.previousValue !== changes.initialValue.currentValue) {
        this.form.setValue(changes.initialValue.currentValue);
      }
      if (initialValue.previousValue) {
        if (initialValue.previousValue.themeColor !== initialValue.currentValue.themeColor) {
          this.form.patchValue({
            themeColor: initialValue.currentValue.themeColor
          });
        }
        if (initialValue.previousValue.privateProfile !== initialValue.currentValue.privateProfile) {
          this.form.patchValue({
            privateProfile: initialValue.currentValue.privateProfile
          });
        }
      }
    }
  }

  onLoading() {
    this.loadingAction.emit({
      ...this.initialValue,
      themeColor: 'red',
      privateProfile: 'true'
    });
  }
}
