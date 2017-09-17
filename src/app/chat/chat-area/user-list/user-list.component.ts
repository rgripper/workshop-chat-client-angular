import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/app/state';
import { User } from 'messaging/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[];

  constructor(store: Store<AppState>) {
    store.subscribe((state) => {
      this.users = state.chat.users.map(u => u);
    });
  }

  ngOnInit() {
  }

}
