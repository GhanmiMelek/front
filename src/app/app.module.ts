import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { LoginComponent } from './layouts/login/login.component';
import { RegisterComponent } from './layouts/register/register.component';
import {  HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './layouts/profile/profile.component';
import { DashbordComponent } from './layouts/dashbord/dashbord.component';
import { FormsModule } from '@angular/forms';
import { AdmindashComponent } from './layouts/admindash/admindash.component';
import { Sidebar1Component } from './layouts/sidebar1/sidebar1.component';
import { ContactComponent } from './layouts/contact/contact.component';
import { UserstablesComponent } from './layouts/userstables/userstables.component';
import { AdminheaderComponent } from './layouts/adminheader/adminheader.component';
import { AdminprofileComponent } from './layouts/adminprofile/adminprofile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ContacttableComponent } from './layouts/contacttable/contacttable.component';
import { HomeComponent } from './layouts/home/home.component';
import { VerifyemailComponent } from './layouts/verifyemail/verifyemail.component';
import { RHComponent } from './layouts/rh/rh.component';
import { FinanceComponent } from './layouts/finance/finance.component';
import { AffiliationComponent } from './layouts/affiliation/affiliation.component';
import { AffiliationadminComponent } from './layouts/affiliationadmin/affiliationadmin.component';
import { FinanceadminComponent } from './layouts/financeadmin/financeadmin.component';
import { RHadminComponent } from './layouts/rhadmin/rhadmin.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    DashbordComponent,
    AdmindashComponent,
    Sidebar1Component,
    ContactComponent,
    UserstablesComponent,
    AdminheaderComponent,
    AdminprofileComponent,
    ContacttableComponent,
    HomeComponent,
    VerifyemailComponent,
    RHComponent,
    FinanceComponent,
    AffiliationComponent,
    AffiliationadminComponent,
    FinanceadminComponent,
    RHadminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
