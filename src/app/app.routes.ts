import { ChatComponent } from './chat/chat.component';
import { LoginComponent } from './account/login/login.component';
import { Routes } from '@angular/router';
import { AuthGuard } from "app/account/auth-guard";

export const appRoutes: Routes = [
  { path: '', component: ChatComponent },
  { path: 'login', component: LoginComponent },
];