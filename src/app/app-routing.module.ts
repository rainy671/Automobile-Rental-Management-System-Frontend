import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { SignupComponent } from './auth/components/signup/signup.component';

const routes: Routes = [
  {path:"register", component: SignupComponent},
  {path:"login", component: LoginComponent},
  { path:"admin", loadChildren: () => import("./modules/admin/admin.module").then(m => m.AdminModule)},
  { path:"customer", loadChildren: () => import("./modules/customer/customer.module").then(m => m.CustomerModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
