import { Observable } from 'rxjs/Observable'
import { CanActivate, Router } from '@angular/router'
import { Injectable } from '@angular/core'
import { Store } from "@ngrx/store"
import { AppState } from "store/app/state"
import { AccountStateType } from 'store/app/account/state'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/map'

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private store: Store<AppState>, private router: Router) { }

    public canActivate(): Observable<boolean> {
        return this.store
            .do(x => console.log('canActivate', x.account))
            .map(x => x.account.type == AccountStateType.Authenticated)
            .do(isAuthenticated => {
                if (!isAuthenticated) {
                    this.router.navigate(['login'], {
                        queryParams: { returnUrl: this.router.url }
                    });
                }
            });
    }
}