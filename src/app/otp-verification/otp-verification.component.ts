import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators,} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.css']
})
export class OtpVerificationComponent implements OnInit {
 VerificationForm:any;
 @ViewChild('OTP')
  input!: ElementRef;
  otp_output:any
 constructor(private router:Router, private formBuilder:FormBuilder ) { }


  ngOnInit(): void {
   
   //verification form validation
    // this.VerificationForm = FormGroup;
    // this.VerificationForm = this.formBuilder.group(
    //   {
    //    otp: ['']
    //   },
    //  );
}


getOTP (){
 console.log(this.otp_output)
}

onOtpChange(val:any){
  this.otp_output = val
console.log(val)
}

}



 
