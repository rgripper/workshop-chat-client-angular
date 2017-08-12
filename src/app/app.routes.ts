import { ChatComponent } from './chat/chat.component';
import { LoginComponent } from './account/login/login.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: 'account/login', component: LoginComponent },
  { path: 'chat',      component: ChatComponent },
];