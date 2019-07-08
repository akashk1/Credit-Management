import { Component, OnInit } from '@angular/core';

import { CreditMgmtService } from './credit-mgmt.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private creditMGMT:CreditMgmtService){
   
  }
  ngOnInit(){
  }
}
