import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { BusinessAccountComponent } from '../business-account/business-account.component';
import { PersonalAccountComponent } from '../personal-account/personal-account.component';

const routes: Routes = [
  { path: '', redirectTo: '/personal-accounts', pathMatch: 'full' },
  { path: 'business-accounts', component: BusinessAccountComponent },
  { path: 'personal-accounts', component: PersonalAccountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }