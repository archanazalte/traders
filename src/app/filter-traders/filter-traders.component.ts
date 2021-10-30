import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup,AbstractControl, FormControl, Validator, Validators ,FormBuilder} from "@angular/forms";
@Component({
  selector: 'app-filter-traders',
  templateUrl: './filter-traders.component.html',
  styleUrls: ['./filter-traders.component.css']
})
export class FilterTradersComponent implements OnInit {
  filterForm:any;
  stateformSubmitted=false;
 constructor( private formBuilder:FormBuilder ) { }
 //state
  dropdownList = [{"id":1,"itemName":"Rajasthan,"}, {"id":2,"itemName":"Asam"},  {"id":3,"itemName":"Maharastra"},  {"id":4,"itemName":"Gujrat"},  {"id":5,"itemName":"Kerla"},  {"id":6,"itemName":"Goa"}, {"id":7,"itemName":"J & K"}, {"id":8,"itemName":"Russia"},{"id":9,"itemName":"Italy"},{"id":10,"itemName":"Sweden"} ];
    dropdownSettings = {};

    //district
    district_dropdownList = [{"id":1,"itemName":"Nasik"}, {"id":2,"itemName":"Nagpur"},  {"id":3,"itemName":"Akola"},  {"id":4,"itemName":"Beed"},  {"id":5,"itemName":"Washim"},  {"id":6,"itemName":"Thane"}, {"id":7,"itemName":"Yavatal"}, {"id":8,"itemName":"sangli"},{"id":9,"itemName":"Satara"},{"id":10,"itemName":"Sweden"} ];
    district_dropdownSettings = {};

    //  city
    city_dropdownList = [{"id":1,"itemName":"Chandwad"}, {"id":2,"itemName":"Yeola"},  {"id":3,"itemName":"Nandgoan"},  {"id":4,"itemName":"Canada"},  {"id":5,"itemName":"South Korea"},  {"id":6,"itemName":"Germany"}, {"id":7,"itemName":"France"}, {"id":8,"itemName":"Russia"},{"id":9,"itemName":"Italy"},{"id":10,"itemName":"Sweden"} ];
    city_dropdownSettings = {};

       //fruit 
       fruit_dropdownList = [{"id":1,"itemName":"Onion"}, {"id":2,"itemName":"Potato"},  {"id":3,"itemName":"Chilli"},  {"id":4,"itemName":"Brinjol"},  {"id":5,"itemName":"Grapes"},  {"id":6,"itemName":"Capsicum"}, {"id":7,"itemName":"Tomato"}, {"id":8,"itemName":"Lady Finger "},{"id":9,"itemName":"Fenugreek Leaf "},{"id":10,"itemName":"Cauliflower"} ];
       fruit_dropdownSettings = {};
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

   this.  city_dropdownSettings = { 
                                  singleSelection: false, 
                                  text:"Select city",
                                  selectAllText:'Select All',
                                  unSelectAllText:'UnSelect All',
                                  enableSearchFilter: true,
                                  classes: "myclass custom-class-example"
                                };  
  
   this.fruit_dropdownSettings = { 
                                  singleSelection: false, 
                                  text:"Select Vegitables",
                                  selectAllText:'Select All',
                                  unSelectAllText:'UnSelect All',
                                  enableSearchFilter: true,
                                  classes: "myclass custom-class-example"
                                }; 

    this.filterForm = FormGroup;
    this.filterForm = this.formBuilder.group(
      {
      state: ['', [Validators.required, ]],
      district: ['', [Validators.required, ]],
      city: ['', [Validators.required, ]],
      fruit: ['', [Validators.required, ]],
      },
     );                       
    }
 

    onFilterFormSubmit()  {
  // this.stateformSubmitted = true;

  // if (this.stateForm.invalid) {
  //   return;
  // }

  // console.log(JSON.stringify(this.stateForm.value, null, 2));
} 
}