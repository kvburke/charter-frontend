import { Component, OnInit } from '@angular/core';
import {Customer} from '../../models/Customer';
import {BillingService } from '../../services/billing.service';
import { RewardPoints } from '../../models/RewardPoints';


@Component({
  selector: 'app-customer-bill',
  templateUrl: './customer-bill.component.html',
  styleUrls: ['./customer-bill.component.css']
})
export class CustomerBillComponent implements OnInit {

  

  constructor(billingService:BillingService) {
    this.billingService=billingService;

   }

  customer: Customer;
  billingService: BillingService;
  rewardPoints: RewardPoints;
  


  ngOnInit() {
    this.customer= new Customer();
    this.rewardPoints= new RewardPoints();
  }

  

  onSubmit(data: Customer){
    
    this.billingService.getBill(data.firstName, data.lastName).subscribe(
      data => {
        console.log(data)
        this.rewardPoints=data;
      }
    );
    
  }

}
