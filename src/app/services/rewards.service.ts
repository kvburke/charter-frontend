import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RewardsService {

  constructor(public http: HttpClient) {
    console.log('Data Service connected...');
   }


    getBill(firstName:String, lastName:String): Observable<any> {
  
    return this.http.post('http://localhost:8080/getCustomerRewardStats', { firstName: firstName, lastName: lastName });

   };

  }
