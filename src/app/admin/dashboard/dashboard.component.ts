import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  display_trader=false;
  display_customer=false;
  display_review=false;
  activeRoutes:any;
  constructor() { }
  
  ngOnInit(): void {
    this.display_trader = true;
  }

  activeRout(event:any) {
    //get id attribute of anchor tag
    var idAttr = event.srcElement.attributes.id;
    this.activeRoutes = idAttr.nodeValue;
    console.log(this.activeRoutes)
    if (this.activeRoutes == 'customer') {
       this.display_trader = false;
       this.display_customer = true;
       this.display_review = false;
      
    }
    else if(this.activeRoutes == 'trader') {
      this.display_trader = true;
      this.display_customer = false;
      this.display_review = false;
     
    }
    else if(this.activeRoutes == 'review'){
      this.display_trader = false;
      this.display_customer = false;
      this.display_review = true;
     
    }
     }
}
