import { CanActivate } from '@angular/router'
import { Injectable } from '@angular/core'
import { Store } from "@ngrx/store"
import { AppState } from "store/app/state"
import { AccountStateType } from 'store/app/account/state'
import { Observable } from "rxjs/Observable"

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private store: Store<AppState>) { }

    public canActivate(): Observable<boolean> {
        return this.store.select(x => x.account.type == AccountStateType.Authenticated);
    }
}