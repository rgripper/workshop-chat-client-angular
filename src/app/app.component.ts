import { Store } from '@ngrx/store';
import { AppState } from '../store/app/state';
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    
    constructor(store: Store<AppState>) {
        store.subscribe(x => console.log(x));
    }
    title = 'app';
}
