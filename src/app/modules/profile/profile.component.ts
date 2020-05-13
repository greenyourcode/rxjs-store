import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  data = {
    name: 'toto',
    id: '1',
    settings: {
      privateProfile: false,
      themeColor: 'blue'
    }
  };

  constructor() { }

  ngOnInit() {
  }
}
