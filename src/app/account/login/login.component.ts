import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AppService } from "store/app/AppService";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    readonly form: FormGroup;

    constructor(formBuilder: FormBuilder, private appService: AppService) {
        this.form = formBuilder.group({
            userName: ['', Validators.required]
        });
    }

    join() {
        if (this.form.invalid) return;
        this.appService.join(this.form.value.userName);
    }
}
