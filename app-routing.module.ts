import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocdashComponent } from './docdash/docdash.component';
import { FrontComponent } from './front/front.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component'; 
import { AuthGaurdService } from './auth-gaurd.service';

import { AuthenticationService } from './authentication.service';

import { UserloginComponent } from './userlogin/userlogin.component';
import { MobileListComponent } from './mobile-list/mobile-list.component';

import { UpdateMobileComponent } from './update-mobile/update-mobile.component';
import { AddMobileComponent } from './add-mobile/add-mobile.component';
import { MobileDetailsComponent } from './mobile-details/mobile-details.component';
import { UserviewComponent } from './userview/userview.component';
import { BookComponent } from './book/book.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { AboutusComponent } from './aboutus/aboutus.component';


const routes:Routes=[{path:'',component:FrontComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'userregistration',component:UserloginComponent},
  {path:'docdash',component:DocdashComponent,canActivate:[AuthGaurdService]},
  {path:'mobilelist',component:MobileListComponent},
   {path:'addmobile',component:AddMobileComponent},
 {path:'update-mobile/:id',component:UpdateMobileComponent},
  {path:'home',component:FrontComponent},
  {path:'mobile-details/:id',component:MobileDetailsComponent},
  {path:'userview',component:UserviewComponent},
  {path:'book',component:BookComponent},
  {path:'customerlist',component:CustomerListComponent},
  {path:'aboutus',component:AboutusComponent}


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




