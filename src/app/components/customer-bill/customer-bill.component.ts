import { Component, OnInit } from '@angular/core';
import {Customer} from '../../models/Customer';
import {RewardsService } from '../../services/rewards.service';
import { RewardPoints } from '../../models/RewardPoints';


@Component({
  selector: 'app-customer-bill',
  templateUrl: './customer-bill.component.html',
  styleUrls: ['./customer-bill.component.css']
})
export class CustomerRewardsComponent implements OnInit {

  

  constructor(rewardsService:RewardsService) {
    this.rewardsService=rewardsService;

   }

  customer: Customer;
  rewardsService: RewardsService;
  rewardPoints: RewardPoints;
  


  ngOnInit() {
    this.customer= new Customer();
    this.rewardPoints= new RewardPoints();
  }

  

  onSubmit(data: Customer){
    
    this.rewardsService.getBill(data.firstName, data.lastName).subscribe(
      data => {
        console.log(data)
        this.rewardPoints=data;
      }
    );
    
  }

}
