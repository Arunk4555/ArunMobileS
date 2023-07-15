import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule}from '@angular/forms'
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';



import { HttpClientModule } from '@angular/common/http';
import { DocdashComponent } from './docdash/docdash.component';
import { FrontComponent } from './front/front.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component'; 
import { AuthGaurdService } from './auth-gaurd.service';
import { RouterModule,Routes } from '@angular/router';
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
@NgModule({
  declarations: [
    AppComponent,
    
    DocdashComponent,
    FrontComponent,
    AdminloginComponent,
    
    UserloginComponent,
         MobileListComponent,
      
         UpdateMobileComponent,
                AddMobileComponent,
                MobileDetailsComponent,
                UserviewComponent,
                BookComponent,
                CustomerListComponent,
                AboutusComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
     
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
