import { Routes } from '@angular/router';
import { BussinessDashboardComponent } from './features/business/pages/bussiness-dashboard.component';
import { UserLoginComponent } from './features/auth/user-login/user-login.component';

export const routes: Routes = [
  { path: '', component: BussinessDashboardComponent, pathMatch: 'full' },
  { path: 'account', component: UserLoginComponent }
];
