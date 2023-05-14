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
import { AffiliationComponent } from './layouts/affiliation/affiliation.component';
import { PensionsComponent } from './layouts/pensions/pensions.component';
import { CreditsComponent } from './layouts/credits/credits.component';
import { PrestationsdesoutienComponent } from './layouts/prestationsdesoutien/prestationsdesoutien.component';
import { AdminheaderComponent } from './layouts/adminheader/adminheader.component';
import { AdminprofileComponent } from './layouts/adminprofile/adminprofile.component';
import { ContectadminComponent } from './layouts/contectadmin/contectadmin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ContacttableComponent } from './layouts/contacttable/contacttable.component';
import { ChartComponent } from './layouts/chart/chart.component';
import { AdminchartComponent } from './layouts/adminchart/adminchart.component';



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
    AffiliationComponent,
    PensionsComponent,
    CreditsComponent,
    PrestationsdesoutienComponent,
    AdminheaderComponent,
    AdminprofileComponent,
    ContectadminComponent,
    ContacttableComponent,
    ChartComponent,
    AdminchartComponent
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
