import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChatClient } from "meetup-chat-client";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  private client = ChatClient.connect("http://serene-basin-84996.herokuapp.com/");


  ngOnDestroy() {
    this.client.disconnect();
  }
}
