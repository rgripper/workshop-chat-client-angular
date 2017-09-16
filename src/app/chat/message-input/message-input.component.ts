import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html',
    styleUrls: ['./message-input.component.scss']
})
export class MessageInputComponent implements OnInit {

    readonly form: FormGroup;

    constructor(formBuilder: FormBuilder) {
        this.form = formBuilder.group({
            messageText: ['', Validators.required]
        })
    }

    ngOnInit() {
    }

}
