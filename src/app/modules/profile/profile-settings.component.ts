import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss']
})
export class ProfileSettingsComponent implements OnInit {
  @Input() initialValue: any;

  constructor() { }

  ngOnInit() {
  }

}
