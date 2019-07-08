import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CreditMgmtService } from '../credit-mgmt.service';

@Component({
  selector: 'app-send-credit',
  templateUrl: './send-credit.component.html',
  styleUrls: ['./send-credit.component.css']
})
export class SendCreditComponent implements OnInit {
id:any;
userDetail;
email;
index;
from;
error;
credit:number;
errorText;
sendData;
users:any=[];
  constructor(private route:ActivatedRoute,private CreditMGMT:CreditMgmtService,private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
      this.id = params['id'];
      this.index = params['index'];
      if(this.id!=null){
      this.CreditMGMT.getAllUsers().subscribe(res=>{
        this.users = res;
        this.userDetail = this.users[this.index];
      this.email = this.userDetail.email;
      });
       }
      });
  }
  send(){
    this.CreditMGMT.sendCredit(this.email,this.from,this.credit).subscribe(res=>{
      
      const data   = JSON.stringify(res);
      this.sendData = JSON.parse(data);
      if(this.sendData.error){
        this.error = 1;
        this.errorText = this.sendData.success;
      }else{
        this.error = 0;
        this.errorText = this.sendData.success;
       
      }
  
    })
   }
  Error(){
    if(this.error==0) this.router.navigateByUrl('view-all-users');
    this.error=2;

  }

}
