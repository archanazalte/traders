import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TradersComponent } from './traders/traders.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TestComponent } from './test/test.component';
import { OtpVerificationComponent } from './otp-verification/otp-verification.component';
import { TradersDetailsComponent } from './traders-details/traders-details.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { FormsModule } from '@angular/forms';
import { FilterTradersComponent } from './filter-traders/filter-traders.component';
import { NgOtpInputModule } from  'ng-otp-input';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { UpdateTradersComponent } from './update-traders/update-traders.component';
import * as $ from 'jquery';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { CustomerListComponent } from './admin/customer-list/customer-list.component';
import { TraderListComponent } from './admin/trader-list/trader-list.component';
import { ReviewListComponent } from './admin/review-list/review-list.component';
import { NgxStarRatingModule } from 'ngx-star-rating';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TradersComponent,
    AboutUsComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    TestComponent,
    OtpVerificationComponent,
    TradersDetailsComponent,
    FilterTradersComponent,
    UpdateCustomerComponent,
    UpdateTradersComponent,
    DashboardComponent,
    CustomerListComponent,
    TraderListComponent,
    ReviewListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularMultiSelectModule,
    FormsModule,
    NgOtpInputModule,
    NgxStarRatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
