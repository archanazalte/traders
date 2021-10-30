import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  selectTab: any;
  isLogin = true;
  isRegister = false;
  Login = false;
  Register = true;
  Varefication = false;
  loginForm: any;
  registerForm: any;
  VareficationForm: any;



  constructor(private router: Router, private formBuilder: FormBuilder) { }
  form: any;

  submitted = false;

  verificationsubmited = false;
  ngOnInit(): void {
    // register form validation
    this.form = FormGroup;
    this.form = this.formBuilder.group(
      {
        fullname: ['', Validators.required],
        lastname: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        mobile: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(40)]],
        type: ['',],
      },

    );

  }
  activeTab(event: any) {
    //get id attribute of anchor tag
   
    var idAttr = event.srcElement.attributes.id;
    this.selectTab = idAttr.nodeValue;
    console.log(this.selectTab)
    // this.form.type.value=this.selectTab
    this.form.value.type = this.selectTab

    // if(this.selectTab==true){
    //   console.log(this.selectTab)
    // }

    // else if(this.selectTab==false){

    // }
  }



  //register form 
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(this.form.value);
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }





}


