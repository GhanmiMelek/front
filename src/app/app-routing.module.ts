import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './layouts/register/register.component';
import { LoginComponent } from './layouts/login/login.component';
import { HeaderComponent } from './layouts/header/header.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { ProfileComponent } from './layouts/profile/profile.component';
import { DashbordComponent } from './layouts/dashbord/dashbord.component';
import { AdmindashComponent } from './layouts/admindash/admindash.component';
import { Sidebar1Component } from './layouts/sidebar1/sidebar1.component';
import { ContactComponent } from './layouts/contact/contact.component';
import { UserstablesComponent } from './layouts/userstables/userstables.component';
import { AdminheaderComponent } from './layouts/adminheader/adminheader.component';
import { AdminprofileComponent } from './layouts/adminprofile/adminprofile.component';
import { ContacttableComponent } from './layouts/contacttable/contacttable.component';
import { HomeComponent } from './layouts/home/home.component';
import { VerifyemailComponent } from './layouts/verifyemail/verifyemail.component';
import { RHComponent } from './layouts/rh/rh.component';
import { FinanceComponent } from './layouts/finance/finance.component';
import { AffiliationComponent } from './layouts/affiliation/affiliation.component';
import { RHadminComponent } from './layouts/rhadmin/rhadmin.component';
import { FinanceadminComponent } from './layouts/financeadmin/financeadmin.component';
import { AffiliationadminComponent } from './layouts/affiliationadmin/affiliationadmin.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'dashbord', component: DashbordComponent },
  { path: 'admindash', component: AdmindashComponent },
  { path: 'sidebar1', component: Sidebar1Component },
  { path: 'contact', component: ContactComponent },
  { path: 'userstables', component: UserstablesComponent },
  { path: 'adminheader', component: AdminheaderComponent },
  { path: 'adminprofile', component: AdminprofileComponent },
  { path: 'contacttable', component: ContacttableComponent },
  { path: 'home', component: HomeComponent },
  { path: 'verifyemail', component: VerifyemailComponent },
  { path: 'RH', component: RHComponent },
  { path: 'finance', component: FinanceComponent },
  { path: 'affiliation', component: AffiliationComponent },
  { path: 'RHadmin', component: RHadminComponent },
  { path: 'financeadmin', component: FinanceadminComponent },
  { path: 'affiliationadmin', component: AffiliationadminComponent }

 






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
