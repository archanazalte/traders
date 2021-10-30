import { Component, OnInit, ViewChild } from '@angular/core';
import { StarRatingComponent } from 'ng-starrating';
import {  AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
 declare var $: any;

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit {
//   public form: FormGroup;
// rating3:any; 
selectTab: any;

  updateTraderForm:any;
  form: any;

  submitted = false;

  constructor( private formBuilder: FormBuilder){
    // this.rating3 = 0;
    // this.form = this.fb.group({
    //   rating: ['', Validators.required],
    // })
  
     

  
  }

  Vegetable_dropdownList = [{"id":1,"itemName":"Onion"}, {"id":2,"itemName":"Potato"},  {"id":3,"itemName":"Chilli"},  {"id":4,"itemName":"Grapes"},  {"id":5,"itemName":"Brinjol"},  {"id":6,"itemName":"Germany"}, {"id":7,"itemName":"France"}, {"id":8,"itemName":"Russia"},{"id":9,"itemName":"Italy"},{"id":10,"itemName":"Sweden"} ];
  Vegetable_dropdownSettings = {};

  //state
  dropdownList = [{"id":1,"itemName":"Rajasthan,"}, {"id":2,"itemName":"Asam"},  {"id":3,"itemName":"Maharastra"},  {"id":4,"itemName":"Gujrat"},  {"id":5,"itemName":"Kerla"},  {"id":6,"itemName":"Goa"}, {"id":7,"itemName":"J & K"}, {"id":8,"itemName":"Russia"},{"id":9,"itemName":"Italy"},{"id":10,"itemName":"Sweden"} ];
    dropdownSettings = {};

    //district
    district_dropdownList = [{"id":1,"itemName":"Nasik"}, {"id":2,"itemName":"Nagpur"},  {"id":3,"itemName":"Akola"},  {"id":4,"itemName":"Beed"},  {"id":5,"itemName":"Washim"},  {"id":6,"itemName":"Thane"}, {"id":7,"itemName":"Yavatal"}, {"id":8,"itemName":"sangli"},{"id":9,"itemName":"Satara"},{"id":10,"itemName":"Sweden"} ];
    district_dropdownSettings = {};

    //  city
    city_dropdownList = [{"id":1,"itemName":"Chandwad"}, {"id":2,"itemName":"Yeola"},  {"id":3,"itemName":"Nandgoan"},  {"id":4,"itemName":"Canada"},  {"id":5,"itemName":"South Korea"},  {"id":6,"itemName":"Germany"}, {"id":7,"itemName":"France"}, {"id":8,"itemName":"Russia"},{"id":9,"itemName":"Italy"},{"id":10,"itemName":"Sweden"} ];
    city_dropdownSettings = {};
    ngOnInit(){
      this.dropdownSettings = { 
        singleSelection: false, 
        text:"Select State",
        selectAllText:'Select All',
        unSelectAllText:'UnSelect All',
        enableSearchFilter: true,
        classes: "myclass custom-class-example"
      };    
  
  this.district_dropdownSettings = { 
        singleSelection: false, 
        text:"Select districts",
        selectAllText:'Select All',
        unSelectAllText:'UnSelect All',
        enableSearchFilter: true,
        classes: "myclass custom-class-example"
      };                         
  
  this.city_dropdownSettings = { 
        singleSelection: false, 
        text:"Select city",
        selectAllText:'Select All',
        unSelectAllText:'UnSelect All',
        enableSearchFilter: true,
        classes: "myclass custom-class-example"
      }; 
  
      this.Vegetable_dropdownSettings = { 
        singleSelection: false, 
        text:"Select Vegitables",
        selectAllText:'Select All',
        unSelectAllText:'UnSelect All',
        enableSearchFilter: true,
        classes: "myclass custom-class-example"
      }; 
  
      this.form = FormGroup;
      this.form = this.formBuilder.group(
        {
          fullname: ['', Validators.required],
          lastname: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          mobile: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(40)]],
          address: ['', Validators.required],
          aadhar: ['', Validators.required],
          state: ['', [Validators.required, ]],
        district: ['', [Validators.required, ]],
        city: ['', [Validators.required, ]],
        Vegetable: ['', [Validators.required, ]],
        },
  
      );
    
    }
   
    


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