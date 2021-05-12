import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CapitalModel } from '../capital.model';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-capitaldetails',
  templateUrl: './capitaldetails.component.html',
  styleUrls: ['./capitaldetails.component.css']
})
export class CapitaldetailsComponent implements OnInit {
 
  capital : CapitalModel;

  constructor(private service : CustomerService, private route : Router) {
    this.capital = new CapitalModel();
   }

  ngOnInit(): void {
    if(localStorage.getItem("customer") == null)
    this.route.navigate(['login']);
}

  addCapital(){
    this.service.createCapital(this.capital);
    this.route.navigate(['list']);
  }

}