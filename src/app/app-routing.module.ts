import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TradersComponent } from './traders/traders.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { Routes,RouterModule } from '@angular/router';
import {TestComponent} from './test/test.component';
import { OtpVerificationComponent } from './otp-verification/otp-verification.component';
import { TradersDetailsComponent } from './traders-details/traders-details.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { UpdateTradersComponent } from './update-traders/update-traders.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { CustomerListComponent } from './admin/customer-list/customer-list.component';
import { TraderListComponent } from './admin/trader-list/trader-list.component';
import { ReviewListComponent } from './admin/review-list/review-list.component';


const routes: Routes = [
  {path :'',redirectTo:'home' , pathMatch:'full'},
  
  {path :'home',component:HomeComponent },
  {path :'traders',component:TradersComponent},
  {path :'about-us',component:AboutUsComponent },
  {path :'navbar',component:NavbarComponent },
  {path :'footer',component: FooterComponent },
  {path :'login',component: LoginComponent },
  {path :'signup',component: SignupComponent },
  {path :'test',component: TestComponent},
  {path :'otpVerification',component: OtpVerificationComponent},
  {path :'tradersDetails',component: TradersDetailsComponent},
  {path :'updateCustomer',component: UpdateCustomerComponent},
  {path :'updatetraders',component: UpdateTradersComponent},
  {path :'dashboard',component: DashboardComponent},
  {path :'customerList',component: CustomerListComponent},
  {path :'traderList',component: TraderListComponent},
  {path :'reviewList',component: ReviewListComponent},
  // {path :'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
