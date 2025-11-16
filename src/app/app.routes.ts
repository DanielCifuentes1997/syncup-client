import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { RegistroWizard } from './auth/registro-wizard/registro-wizard';
import { LoginSuccessComponent } from './auth/login-success/login-success';
import { Layout } from './layout/layout';
import { authGuard } from './security/auth-guard';
import { Home } from './pages/home/home';
import { OnboardingLayout } from './onboarding/onboarding-layout/onboarding-layout';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'registro', component: RegistroWizard },
  { path: 'login-success', component: LoginSuccessComponent },
  
  { 
    path: 'bienvenido', 
    component: OnboardingLayout, 
    canActivate: [authGuard] 
  },
  
  { 
    path: 'dashboard', 
    component: Layout, 
    canActivate: [authGuard],
    children: [
      { path: 'home', component: Home },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  },
  
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];