import { Component, OnInit } from '@angular/core';
import { AppService } from 'store/app/AppService';
import { User } from 'messaging/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
users: User[]
  constructor() { }

  ngOnInit() {
  }

}
