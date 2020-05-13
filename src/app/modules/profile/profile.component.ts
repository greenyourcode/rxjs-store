import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  data = {
    name: 'toto',
    settings: {
      privateProfile: false,
      themeColor: 'blue'
    }
  };

  constructor() { }

  ngOnInit() {
  }
}
