import { ChatComponent } from './chat/chat.component';
import { LoginComponent } from './account/login/login.component';
import { Routes } from '@angular/router';
import { AuthGuard } from "app/account/auth-guard";
import { NotFoundComponent } from 'app/not-found/not-found.component';

export const appRoutes: Routes = [
  { path: '', component: ChatComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent }
];