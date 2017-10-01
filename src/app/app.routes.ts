
import { LoginComponent } from './account/login/login.component';
import { Routes } from '@angular/router';
import { AuthGuard } from "app/account/auth-guard";
import { NotFoundComponent } from 'app/not-found/not-found.component';
import { ChatComponent } from "app/chat/chat.component";

export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: ChatComponent},
  { path: '**', component: NotFoundComponent }
];