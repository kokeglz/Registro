import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard'; 

const routes: Routes = [
  { path: 'inicio', loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioPageModule), canActivate: [AuthGuard] }, 
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
  { path: 'error', loadChildren: () => import('./error/error.module').then(m => m.ErrorPageModule) }, 
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
