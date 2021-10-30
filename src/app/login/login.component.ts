import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm:any;
  registerForm:any;
  VareficationForm:any;

  constructor(private router:Router, private formBuilder:FormBuilder ) { }
form:any;
loginform:any;
submitted = false;
loginsubmited=false;
verificationsubmited=false;
  ngOnInit(): void {
    //login form validation
    this.loginform = FormGroup;
    this.loginform = this.formBuilder.group(
      {
        mobile: ['', [Validators.required,  Validators.maxLength(10) , Validators.minLength(10)]],
      },
    
    );
  
 //verification form validation
    this.VareficationForm = FormGroup;
    this.VareficationForm = this.formBuilder.group(
      {
       otp: ['', [Validators.required,  Validators.maxLength(4) , Validators.minLength(4)]],
      },
    
    );


this.VareficationForm =new FormGroup({
  otp: new FormControl('')
})
  }


 
 
  submitVareficationForm(){
    var otp=this.VareficationForm.value.getOtp
    console.log('Otp',otp)
  }








//login form
get e(): { [key: string]: AbstractControl } {
  return this.loginform.controls;
}

onlogin(): void {
  this.loginsubmited = true;

  if (this.loginform.invalid) {
   return;
}

  console.log(JSON.stringify(this.loginform.value, null, 2));
}

}


//verification form
// get v(): { [key: string]: AbstractControl } {
//   return this.loginform.controls;
// }

// onverification()  {
//   this.verificationsubmited = true;

//   if (this.form.invalid) {
//     return;
//   }

//   console.log(JSON.stringify(this.form.value, null, 2));
// }


// }



// function email() {
//   throw new Error('Function not implemented.');
// }
// function email() {
//   throw new Error('Function not implemented.');
// };

