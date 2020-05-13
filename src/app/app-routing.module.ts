import { ProfileComponent } from './modules/profile/profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './modules/customers/customers.component';


const routes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
