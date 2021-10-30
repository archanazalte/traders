import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-traders-details',
  templateUrl: './traders-details.component.html',
  styleUrls: ['./traders-details.component.css']
})
export class TradersDetailsComponent implements OnInit {
  public form: FormGroup;
  rating3:any; 
    constructor(private fb: FormBuilder){
      this.rating3 = 0;
      this.form = this.fb.group({
        rating: ['', Validators.required],
      })
    }


  ngOnInit(): void {
  }




 
}
