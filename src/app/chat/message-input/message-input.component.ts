import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.scss']
})
export class MessageInputComponent implements OnInit {

  form: FormGroup;
  @Output() sendMessage = new EventEmitter()

  constructor(formBuilder:FormBuilder) {
    this.form=formBuilder.group({text:""})
  }
   
  send() {
    this.sendMessage.emit(this.form.value.text);
  }

  ngOnInit() {
  }

}
