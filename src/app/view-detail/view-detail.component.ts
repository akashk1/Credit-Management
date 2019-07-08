import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CreditMgmtService } from '../credit-mgmt.service';


@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.css']
})
export class ViewDetailComponent implements OnInit {
  id;
  userDetail;
  index;
  users:any=[]
  constructor(private route:ActivatedRoute,private creditMGMT:CreditMgmtService,private router:Router) { }

  ngOnInit() {
   this.route.params.subscribe((params:Params)=>{
     this.id = params['id'];
     this.index = params['index'];
     console.log(this.id);
      this.creditMGMT.getAllUsers().subscribe(res=>{
        this.users=res;
     this.userDetail=this.users[this.index];
     console.log(this.userDetail);
      });
  })
  }
 sendCredit(id:any){
   this.router.navigateByUrl('/send-credit/'+id+'/'+this.index);
 }
}
