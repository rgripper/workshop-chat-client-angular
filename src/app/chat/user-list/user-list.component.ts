import { Component, OnInit, Input } from '@angular/core';
import { AppState } from "store/app/state";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { User } from "messaging/user";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @Input() users: ReadonlyArray<User>

  ngOnInit() {
  }

}
